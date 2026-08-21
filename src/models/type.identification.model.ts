import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"
import type { UUID } from "node:crypto";

class type_identifications extends Model {

    declare id:UUID;
    declare name:string;
    declare code:string;


}

type_identifications.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
        
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    code:{
        type:DataTypes.STRING,
        allowNull:false
    }
    },
    {
        sequelize:db,
        tableName:"ROLES"
    }


)