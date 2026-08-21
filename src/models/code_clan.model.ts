import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";
import type { UUID } from "node:crypto";

export class CoderClan extends Model {
  declare clan_id: UUID;
  declare coder_id: UUID;
  declare start_date: Date;
  declare end_date: Date | null;
}

CoderClan.init(
  {
    clan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    coder_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize:db,
    tableName: "coder_clan",
    }
);  