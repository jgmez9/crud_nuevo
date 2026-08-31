import { QueryInterface,DataTypes } from "sequelize";


export default {
    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Room',{

            id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        type: {
            type: DataTypes.ENUM(
                "CLASSROOM",
                "LAB",
                "AUDITORIUM",
                "MEETING_ROOM"
            ),
            allowNull: false
        },

        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        campus_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
        })
    },

    down: async(queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Room')
    }

}