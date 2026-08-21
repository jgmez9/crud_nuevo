import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"
import type { UUID } from "node:crypto";

class Schedule extends Model{

    declare id:UUID;
    declare name:string;
    declare strart_time:string;
    declare end_time:string;
}

Schedule.init({

    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    strart_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
    end_time:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"SCHEDULE"
})