import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Inventario extends Model {
  declare id_inventario: string;
  declare cantidad: number;
  declare id_bodega: string;
  declare id_repuesto: string;
}

Inventario.init(
  {
    id_inventario: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_bodega: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    id_repuesto: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Inventario",
    timestamps: true,
  }
);

export default Inventario;