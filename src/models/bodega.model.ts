import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Bodega extends Model {
  declare id_bodega: string;
  declare name: string;
  declare ciudad: string;
  declare address: string;
  declare state: string;
  declare id_distribuciones: string;
}

Bodega.init(
  {
    id_bodega: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_distribuciones: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Bodega",
    timestamps: true,
  }
);

export default Bodega;