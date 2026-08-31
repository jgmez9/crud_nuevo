import { DataTypes,QueryInterface } from "sequelize";


export default {

    up: async(queryInterface:QueryInterface) =>{
        await queryInterface.createTable('Address',{
        id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    city_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    })
},
    down: async(queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Identifications')
    }    
}