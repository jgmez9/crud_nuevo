import { DataTypes,Model } from "sequelize";
import db from "../config/db.js";

class Cities extends Model{

    declare id:string;
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
        tableName:"Cities"
    }

)

export default Cities