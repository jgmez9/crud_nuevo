import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Repuestos extends Model {
  declare id_repuesto: string;
  declare name: string;
  declare code: string;
  declare description: string;
  declare price: string;
  declare state: string;
}

Repuestos.init(
  {
    id_repuesto: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Repuestos",
    timestamps: true,
  }
);

export default Repuestos;