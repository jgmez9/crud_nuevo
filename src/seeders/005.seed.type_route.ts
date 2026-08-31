import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Type_route", [
            {
                id: uuidv4(),
                name: "Basic",
            },
            {
                id: uuidv4(),
                name: "Advanced",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Type_route", {
            name: ["Basic", "Advanced"],
        });
    },
};