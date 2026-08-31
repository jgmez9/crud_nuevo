import { Model,DataTypes } from "sequelize";
import db from "../config/db.js"

class detalle_solicitud extends Model{

    declare id_detalle:string
    declare cantidad:number
    declare id_solicitud:string
    declare id_repuesto:string

}

detalle_solicitud.init({
    
    id_detalle:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_solicitud:{
        type:DataTypes.UUID,
        allowNull:false
    },
    id_repuesto:{
        type:DataTypes.UUID,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"Detalle_solicitud"
})

export default detalle_solicitud