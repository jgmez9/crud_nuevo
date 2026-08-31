import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";

class Talleres extends Model {
  declare id_taller: string;
  declare name: string;
  declare nit: string;
  declare address: string;
  declare phone: string;
  declare responsable: string;
  declare state: string;
}

Talleres.init(
  {
    id_taller: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    responsable: {
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
    tableName: "Talleres",
    timestamps: true,
  }
);

export default Talleres;