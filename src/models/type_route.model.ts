import { Model, DataTypes} from "sequelize";
import db from "../config/db.js";


export class type_route extends Model {
  declare id: string;
  declare name: string;
}

type_route.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.ENUM('Basic','Advanced'),
      allowNull: false,
    },
  },
  {
    sequelize:db,
    tableName: "Type_route"
    
  }
);

export default type_route