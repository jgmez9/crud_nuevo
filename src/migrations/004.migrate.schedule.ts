import { QueryInterface,DataTypes } from "sequelize";

export default {
    up: async (queryInterface:QueryInterface)=>{
        await  queryInterface.createTable('Schedule',{

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
        })
    },

    down: async (queryInterface:QueryInterface)=>{
        await  queryInterface.dropTable('Schedule')
   }
}