import { QueryInterface,DataTypes } from "sequelize";

export default {

    up: async(queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Type_route',{

            id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.ENUM('Basic','Advanced'),
      allowNull: false,
    },
        })

    },

    down: async (queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Type_route')
    }
}

