import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"

class Schedule extends Model{

    declare id:string;
    declare name:string;
    declare strart_time:string;
    declare end_time:string;
}

Schedule.init({

    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },

    name:{
        type:DataTypes.ENUM('Daytime','Nocturnal'),
        allowNull:false
    },
    strart_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
    end_time:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"Schedule"
})

export default Schedule