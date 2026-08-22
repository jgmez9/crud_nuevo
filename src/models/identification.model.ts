import { Model, DataTypes } from "sequelize";
import db from "../config/db.js"

class Identifications extends Model{
    
    
    declare id:string;
    declare type_identification:string;
    declare number:string
    



}

Identifications.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true

        },
        type_identification:{
            type:DataTypes.ENUM('CC','TI','CE'),
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


export default Identifications