import { type Request, type Response, type NextFunction } from "express";
import sequelize from "../config/db.js";
import Solicitud from "../models/solicitud.model.js";
import DetalleSolicitud from "../models/detalle_solicitud.model.js";
import Inventario from "../models/inventario.model.js";

export const aprobarSolicitud = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ ok: false, message: "ID de solicitud inválido" });
  }

  const t = await sequelize.transaction();

  try {
    // Bloqueamos la fila para que dos aprobaciones simultáneas no pisen el mismo stock
    const solicitud = await Solicitud.findByPk(id, {
      transaction: t,
      lock: t.LOCK.UPDATE,
    });

    if (!solicitud) {
      await t.rollback();
      return res.status(404).json({ ok: false, message: "Solicitud no encontrada" });
    }

    if (solicitud.get("state") !== "Pendiente") {
      await t.rollback();
      return res.status(400).json({
        ok: false,
        message: `No se puede aprobar una solicitud en estado '${solicitud.get("state")}'`,
      });
    }

    const detalles = await DetalleSolicitud.findAll({
      where: { id_solicitud: id },
      transaction: t,
    });

    if (detalles.length === 0) {
      await t.rollback();
      return res.status(400).json({ ok: false, message: "La solicitud no tiene repuestos asociados" });
    }

    // 1) Verificar TODO el stock antes de descontar nada
    for (const detalle of detalles) {
      const inventario = await Inventario.findOne({
        where: {
          id_bodega: solicitud.get("id_bodega"),
          id_repuesto: detalle.get("id_repuesto"),
        },
        transaction: t,
        lock: t.LOCK.UPDATE,
      });

      const disponible = inventario ? Number(inventario.get("cantidad")) : 0;
      const solicitada = Number(detalle.get("cantidad"));

      if (disponible < solicitada) {
        await t.rollback();
        return res.status(400).json({
          ok: false,
          message: `Stock insuficiente para el repuesto ${detalle.get("id_repuesto")}. Disponible: ${disponible}, solicitado: ${solicitada}`,
        });
      }
    }

    // 2) Si TODO alcanza, ahora sí descontamos cada repuesto
    for (const detalle of detalles) {
      await Inventario.decrement("cantidad", {
        by: Number(detalle.get("cantidad")),
        where: {
          id_bodega: solicitud.get("id_bodega"),
          id_repuesto: detalle.get("id_repuesto"),
        },
        transaction: t,
      });
    }

    // 3) Cambiamos el estado de la solicitud
    solicitud.set("state", "Aprobada");
    await solicitud.save({ transaction: t });

    await t.commit();

    res.json({ ok: true, message: "Solicitud aprobada y stock descontado correctamente" });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};