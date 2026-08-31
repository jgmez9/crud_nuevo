import { QueryInterface,DataTypes} from "sequelize";

export default {

    up: async(queryInterface:QueryInterface)=>{
        await queryInterface.createTable('Clan',{


            id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    schedule_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    type_route_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    room_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    tl_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
        })
    },

    down: async (queryInferface:QueryInterface)=>{
        await queryInferface.dropTable('Room')
    }
}