import { QueryInterface,DataTypes } from "sequelize";

export default  {
    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Identifications',{
    id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true

        },
        type_identification:{
            type:DataTypes.STRING,
            allowNull:false
            
        },
        number:{
            type:DataTypes.STRING,
            allowNull:false
        }
            
        })
    },


    down: async (queryInterface:QueryInterface)=>
    {
        await queryInterface.dropTable('Identification');

        },
};
