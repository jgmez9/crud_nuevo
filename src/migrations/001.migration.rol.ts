import { QueryInterface,DataTypes } from "sequelize";

export default  {
    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Roles',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.ENUM('Coder','TL'),
        allowNull:false
    },
            
        })
    },


    down: async (queryInterface:QueryInterface)=>
    {
        await queryInterface.dropTable('Roles');

        await queryInterface.sequelize.query('DROP TABLE IF EXISTS "enum_Roles_name";');},
};
