import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"
import type { UUID } from "node:crypto";

class Rol extends Model {
    declare rol_id:UUID;
    declare name:string;

}

Rol.init({
    
    rol_id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

},
    {
        sequelize:db,
        tableName:'Roles'
    }
)