import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"

class Rol extends Model {
    declare id:string;
    declare name:string;

}

Rol.init({
    
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.ENUM('Coder','TL'),
        allowNull:false
    }
  
        
    

},
    {
        sequelize:db,
        tableName:'Roles'
    }
)

export default Rol