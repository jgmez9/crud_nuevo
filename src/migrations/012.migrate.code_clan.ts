import { QueryInterface,DataTypes} from "sequelize";

export default {

    up: async (queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Code_clan',{

     clan_id: {
        type: DataTypes.UUID,
        allowNull: false,
        
      },
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,

      },

      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },


        })
    },
    down: async (queryInterface:QueryInterface)=>{
        await queryInterface.dropTable('Code_clan')
    }
}