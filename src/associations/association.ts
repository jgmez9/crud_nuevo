import Usuario from "../models/user.model.js";
import Taller from "../models/talleres.model.js";
import Bodega from "../models/bodega.model.js";
import Repuesto from "../models/repuestos.model.js";
import Inventario from "../models/inventario.model.js";
import Solicitud from "../models/solicitud.model.js";
import DetalleSolicitud from "../models/detalle_solicitud.model.js";

export const setupAssociations = (): void => {
  // Bodega <-> Repuesto (N:M) a través de Inventario
  Bodega.belongsToMany(Repuesto, { through: Inventario, foreignKey: "id_bodega", otherKey: "id_repuesto" });
  Repuesto.belongsToMany(Bodega, { through: Inventario, foreignKey: "id_repuesto", otherKey: "id_bodega" });

  // Solicitud <-> Repuesto (N:M) a través de DetalleSolicitud
  Solicitud.belongsToMany(Repuesto, { through: DetalleSolicitud, foreignKey: "id_solicitud", otherKey: "id_repuesto" });
  Repuesto.belongsToMany(Solicitud, { through: DetalleSolicitud, foreignKey: "id_repuesto", otherKey: "id_solicitud" });

  // 1:N
  Taller.hasMany(Solicitud, { foreignKey: "id_taller" });
  Solicitud.belongsTo(Taller, { foreignKey: "id_taller" });

  Bodega.hasMany(Solicitud, { foreignKey: "id_bodega" });
  Solicitud.belongsTo(Bodega, { foreignKey: "id_bodega" });

  Usuario.hasMany(Solicitud, { foreignKey: "id_user" });
  Solicitud.belongsTo(Usuario, { foreignKey: "id_user" });
};