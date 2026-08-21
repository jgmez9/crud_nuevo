import { DataTypes,Model, UUIDV4 } from "sequelize";
import db from "../config/db.js"
import type { UUID } from "node:crypto";

class Campus extends Model {

    declare id:UUID;
    declare name:string;
    declare city_id:UUID;
    declare address:string;
}

Campus.init({

    id:{
        type:DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true,
    },
    name:{
        type:DataTypes.UUID,
        allowNull:false,
    },
    city_id:{
        type:DataTypes.UUID,
        allowNull:false,
    },
    address:{
        type:DataTypes.UUID,
        allowNull:false,
    }  
},
{
    sequelize:db,
    tableName:"CAMPUS"
})