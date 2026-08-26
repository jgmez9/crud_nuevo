import { DataTypes,Model } from "sequelize";
import db from "../config/db.js"

class Rol extends Model {
    declare rol_id:string;
    declare name:string;

}

Rol.init({
    
    rol_id:{
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