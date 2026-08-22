import { DataTypes,Model, UUIDV4 } from "sequelize";
import db from "../config/db.js"


class Campus extends Model {

    declare id:string;
    declare name:string;
    declare city_id:string;
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
        type:DataTypes.ENUM('Barranquilla',"Medellin"),
        allowNull:false,
    },
    address:{
        type:DataTypes.UUID,
        allowNull:false,
    }  
},
{
    sequelize:db,
    tableName:"Campus"
})

export default Campus