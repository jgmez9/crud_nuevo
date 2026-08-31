import { QueryInterface,DataTypes } from "sequelize";

export default {

    up: async(queryInteface:QueryInterface)=>{
        await queryInteface.createTable('Cities',{

            id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true

    },


    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    code_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
        })
    },

    down: async (queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Cities')
    }
}