import { type Request, type Response, type NextFunction } from "express";
import { randomUUID } from "crypto";
import sequelize from "../config/db.js";
import Solicitud from "../models/solicitud.model.js";
import DetalleSolicitud from "../models/detalle_solicitud.model.js";
import Inventario from "../models/inventario.model.js";
import { type CrearSolicitudDTO } from "../dto/solicitud.dto.js";

export const crearSolicitud = async (
  req: Request<unknown, unknown, CrearSolicitudDTO>,
  res: Response,
  next: NextFunction
) => {
  const { id_taller, id_bodega, id_user, detalles } = req.body;
  const t = await sequelize.transaction();

  try {
    const solicitud = await Solicitud.create(
      {
        id_solicitud: randomUUID(),
        id_taller,
        id_bodega,
        id_user,
        fecha_solicitud: new Date(),
        state: "Pendiente",
      },
      { transaction: t }
    );

    const filasDetalle = detalles.map((d) => ({
      id_detalle: randomUUID(),
      id_solicitud: solicitud.get("id_solicitud"),
      id_repuesto: d.id_repuesto,
      cantidad: d.cantidad,
    }));

    await DetalleSolicitud.bulkCreate(filasDetalle, { transaction: t });

    await t.commit();

    res.status(201).json({
      ok: true,
      data: { id_solicitud: solicitud.get("id_solicitud"), detalles: filasDetalle },
    });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};

export const aprobarSolicitud = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ ok: false, message: "ID de solicitud inválido" });
  }

  const t = await sequelize.transaction();

  try {
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

    solicitud.set("state", "Aprobada");
    await solicitud.save({ transaction: t });

    await t.commit();

    res.json({ ok: true, message: "Solicitud aprobada y stock descontado correctamente" });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};