import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Distribuciones extends Model {
  declare id_distribuciones: string;
  declare name: string;
  declare nit: string;
  declare address: string;
  declare phone: string;
  declare state: string;
}

Distribuciones.init(
  {
    id_distribuciones: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nit: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Distribuciones",
    timestamps: true,
  }
);

export default Distribuciones;