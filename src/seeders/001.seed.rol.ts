import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Roles", [
            {
                id: uuidv4(),
                name: "Coder",
            },
            {
                id: uuidv4(),
                name: "TL",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Roles", {
            name: ["Coder", "TL"],
        });
    },
};