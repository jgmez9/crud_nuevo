import { DataTypes, Model } from "sequelize";
import db from "../config/db.js";
import Campus from "./campus.model.js";

class Room extends Model {

    declare id: string;
    declare name: string;
    declare type: string;
    declare capacity: number;
    declare campus_id: string;

}

Room.init(
    {
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
    },
    {
        sequelize: db,
        tableName: "rooms",
        timestamps: true
    }
);

Campus.hasMany(Room, {
    foreignKey: "campus_id",
    as: "rooms"
});

Room.belongsTo(Campus, {
    foreignKey: "campus_id",
    as: "campus"
});

export default Room;