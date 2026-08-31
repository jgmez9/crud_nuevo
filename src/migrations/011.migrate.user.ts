import { QueryInterface,DataTypes } from "sequelize";

export default {

    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Users',{

            id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
            

        },

        first_name:{
            type:DataTypes.STRING,
            allowNull:false

        },

        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },

        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true

        },
        
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },

        birthday_day:{
            type: DataTypes.DATE,
            allowNull:false
        },

        isActive:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },

        rol_id:{
            type:DataTypes.UUID,
            allowNull:true
        },
        
        Identifications_id:{    
            type: DataTypes.UUID,
            allowNull:true
        },
        address_user_id:{
            type: DataTypes.UUID,
            allowNull:true
        }


        })
    },
    
    down: async (queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Users')
    }
}