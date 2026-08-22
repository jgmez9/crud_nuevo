import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";


export class Address_user extends Model {
  declare id: string;
  declare city_id: string;
  declare address: string;
}

Address_user.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    city_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize:db,
    tableName: "Address",
    
  }
);

export default Address_user