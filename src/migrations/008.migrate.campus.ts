import { QueryInterface,DataTypes } from "sequelize";

export default {

    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Campus',{

            id:{
                    type:DataTypes.UUID,
                    defaultValue:DataTypes.UUIDV4,
                    primaryKey:true,
                },
                name:{
                    type:DataTypes.UUID,
                    allowNull:false,
                },
                city_id:{
                    type:DataTypes.STRING,
                    allowNull:false,
                },
                address:{
                    type:DataTypes.STRING,
                    allowNull:false,
                }
        })
    },

    down: async (queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Campus')}
    }