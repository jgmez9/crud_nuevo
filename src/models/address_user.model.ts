import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";
import type { UUID } from "node:crypto";

export class AddressUser extends Model {
  declare id: UUID;
  declare city_id: string;
  declare address: string;
}

AddressUser.init(
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
    tableName: "address_user",
    
  }
);