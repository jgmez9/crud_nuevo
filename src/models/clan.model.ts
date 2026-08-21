import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";
import type { UUID } from "node:crypto";

export class Clan extends Model {
  declare id: UUID;
  declare name: string;
  declare schedule_id: UUID;
  declare type_route_id: UUID;
  declare room_id:UUID;
  declare ft_id: UUID;
}

Clan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    schedule_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    type_route_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    room_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    ft_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize:db,
    tableName: "clan"
  }
);