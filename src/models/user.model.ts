import { DataTypes,Model, UUID } from "sequelize";
import db from "../config/db.js"

class User extends Model {

    declare id:string;
    declare firts_name:string;
    declare last_name:string;
    declare email:string;
    declare phone:string;
    declare birthday_day:Date;
    declare isActive:boolean;
    declare rol_id:string;
    declare Identifications_id:string;
    declare address_user_id:string;
}

User.init (
    {
        id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
            

        },

        first_name:{
            type:DataTypes.STRING,
            allowNull:false

        },

        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },

        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true

        },
        
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },

        birthday_day:{
            type: DataTypes.DATE,
            allowNull:false
        },

        isActive:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },

        rol_id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        
        Identifications_id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        address_user_id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        }
        
    },
    {
        sequelize: db,
        tableName:"Users"

    }
)


export default User