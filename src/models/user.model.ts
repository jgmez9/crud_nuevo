import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"


class User extends Model {

    declare id:string;
    declare firts_name:string;
    declare last_name:string;
    declare email:string;
    declare birthday_day:Date
    declare isActive:boolean
    declare rol_id:string
    declare dni_id:string
    declare address_user_id:string
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
            allowNull:false

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
            type:DataTypes.STRING,
            allowNull:false
        },
        
        dni_id:{
            type: DataTypes.UUID,
            allowNull:false
        },
        address_user_id:{
            type: DataTypes.UUID,
            allowNull:false
        }
        
    },
    {
        sequelize: db

    }
)

//User.belongsTo(roles, {foreignKey: 'dni_id'})
//User.belongsTo(address, {foreignKey: 'address_user_id'})


export default User