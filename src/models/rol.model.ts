import {Model, DataTypes} from "sequelize"
import db from "../config/db.js"


class roles extends Model {

    declare id_roles:string
    declare name :string
    

}

roles.init({

    id_rol:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }



},{
    sequelize:db,
    tableName:'Roles'
}
)

export default roles