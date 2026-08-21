import { DataTypes,Model } from "sequelize";
import db from "../config/db.js";
import type { UUID } from "node:crypto";

class Cities extends Model{

    declare id:UUID;
    declare name:string;
    declare code_name:string;
}

Cities.init({
    
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true

    },


    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    code_name:{
        type:DataTypes.STRING,
        allowNull:false
    }


    },
    {
        sequelize:db,
        tableName:"CITIES"
    }

)