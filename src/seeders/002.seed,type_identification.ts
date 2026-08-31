import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Type_identifications", [
            {
                id: uuidv4(),
                name: "CC",
                code: "CC",
            },
            {
                id: uuidv4(),
                name: "TI",
                code: "TI",
            },
            {
                id: uuidv4(),
                name: "PP",
                code: "PP",
            },
            {
                id: uuidv4(),
                name: "CE",
                code: "CE",
            },
            {
                id: uuidv4(),
                name: "PPT",
                code: "PPT",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Type_identifications", {
            name: ["CC", "TI", "PP", "CE", "PPT"],
        });
    },
};