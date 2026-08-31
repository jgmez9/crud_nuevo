import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Solicitud extends Model {
  declare id_solicitud: string;
  declare fecha_solicitud: Date;
  declare state: string;
  declare id_bodega: string;
  declare id_user: string;
  declare id_taller: string;
}

Solicitud.init(
  {
    id_solicitud: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_bodega: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    id_taller: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Solicitudes",
    timestamps: true,
  }
);

export default Solicitud;