import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Code_clan", [
            {
                id: uuidv4(),
                clan_id: uuidv4(),
                start_date: "2026-01-15",
                end_date: "2026-11-30",
            },
            {
                id: uuidv4(),
                clan_id: uuidv4(),
                start_date: "2026-02-01",
                end_date: null,
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Code_clan", {
            start_date: ["2026-01-15", "2026-02-01"],
        });
    },
};