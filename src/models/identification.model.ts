import { Model, DataTypes } from "sequelize";
import db from "../config/db.js"
import type { UUID } from "node:crypto";

class Identifications extends Model{
    
    
    declare identifaction_id:UUID;
    declare type_identification:UUID;
    declare number:string
    



}

Identifications.init(
    {
        identification_id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true

        },
        type_identification:{
            type:DataTypes.UUID,
            allowNull:false
            
        },
        number:{
            type:DataTypes.UUID,
            allowNull:false
        }
    },
    {
        sequelize:db,
        tableName:"Identifications"
    }
)


