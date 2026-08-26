  import { Model, DataTypes } from "sequelize";
  import db from "../config/db.js";

  export class Coder_clan extends Model {
    declare clan_id: string;
    declare coder_id: string;
    declare start_date: Date;
    declare end_date: Date | null;
  }

  Coder_clan.init(
    {
      clan_id: {
        type: DataTypes.UUID,
        allowNull: false,
        
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
      tableName: "Coder_clan",
      }
  );  




  export default Coder_clan