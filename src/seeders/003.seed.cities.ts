import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Cities", [
            {
                id: uuidv4(),
                name: "Bogotá",
                code_name: "BOG",
            },
            {
                id: uuidv4(),
                name: "Medellín",
                code_name: "MDE",
            },
            {
                id: uuidv4(),
                name: "Cali",
                code_name: "CLO",
            },
            {
                id: uuidv4(),
                name: "Barranquilla",
                code_name: "BAQ",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Cities", {
            code_name: ["BOG", "MDE", "CLO", "BAQ"],
        });
    },
};