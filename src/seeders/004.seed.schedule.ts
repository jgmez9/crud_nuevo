import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Schedule", [
            {
                id: uuidv4(),
                name: "Daytime",
                strart_time: "06:00",
                end_time: "13:00",
            },
            {
                id: uuidv4(),
                name: "Nocturnal",
                strart_time: "13:00",
                end_time: "21:00",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Schedule", {
            name: ["Daytime", "Nocturnal"],
        });
    },
};