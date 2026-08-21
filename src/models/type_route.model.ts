import { Model, DataTypes} from "sequelize";
import db from "../config/db.js";
import type { UUID } from "node:crypto";


export class TypeRoute extends Model {
  declare id: UUID;
  declare name: string;
}

TypeRoute.init(
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
  },
  {
    sequelize:db,
    tableName: "type_route"
    
  }
);