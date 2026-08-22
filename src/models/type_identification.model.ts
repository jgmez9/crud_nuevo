import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"

class type_identifications extends Model {

    declare id:string;
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
        tableName:"Type_identifications"
    }


)

export default type_identifications