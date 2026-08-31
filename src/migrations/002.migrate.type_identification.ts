import { QueryInterface,DataTypes } from "sequelize";


export default {

    up: async (queryInteface:QueryInterface)=>{
        await queryInteface.createTable('Type_identifications',{
            id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
        
    },
    name:{
        type:DataTypes.ENUM('CC','TI','PP','CE','PPT'),
        allowNull:false
    },
    code:{
        type:DataTypes.STRING,
        allowNull:false
    }
        })
    },

    down:async (queryInteface:QueryInterface)=>{
        await queryInteface.dropTable('Type_identifications')
    }
}