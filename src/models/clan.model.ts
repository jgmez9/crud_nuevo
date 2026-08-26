import { Model, DataTypes } from "sequelize";
import db from "../config/db.js";


export class Clan extends Model {
  declare id: string;
  declare name: string;
  declare schedule_id: string;
  declare type_route_id: string;
  declare room_id:string;
  declare tl_id: string;
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

    tl_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize:db,
    tableName: "Clan"
  }
);



export default Clan