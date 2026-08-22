import { DataTypes,Model, UUIDV4 } from "sequelize";
import db from "../config/db.js"

class Room extends Model {

    declare id:string;
    declare name:string;
    declare capacit:number;
    declare campus_id:string;
}

Room.init ({

    id:{
        type:DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    capacity:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    campus_id:{
        type:DataTypes.UUID,
        allowNull:false,
    }

},
    {
        sequelize:db,
        tableName:"Room"
    }
)

export default Room