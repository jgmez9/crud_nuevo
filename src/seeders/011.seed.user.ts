import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Users", [
            {
                id: uuidv4(),
                first_name: "Juan",
                last_name: "Pérez",
                email: "juan.perez@example.com",
                phone: "3001234567",
                birthday_day: new Date("1995-05-15"),
                isActive: true,
                rol_id: uuidv4(),
                Identifications_id: uuidv4(),
                address_user_id: uuidv4(),
            },
            {
                id: uuidv4(),
                first_name: "María",
                last_name: "Gómez",
                email: "maria.gomez@example.com",
                phone: "3109876543",
                birthday_day: new Date("1998-10-20"),
                isActive: true,
                rol_id: uuidv4(),
                Identifications_id: uuidv4(),
                address_user_id: uuidv4(),
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Users", {
            email: ["juan.perez@example.com", "maria.gomez@example.com"],
        });
    },
};