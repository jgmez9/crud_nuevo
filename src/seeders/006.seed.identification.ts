import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Identifications", [
            {
                id: uuidv4(),
                type_identification: "CC",
                number: "123456789",
            },
            {
                id: uuidv4(),
                type_identification: "CE",
                number: "987654321",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        // Nota: en tu migración creas la tabla 'Identifications', pero en el down borrabas 'Identification'. 
        // Se ajusta aquí al nombre real de la tabla para evitar errores.
        await queryInterface.bulkDelete("Identifications", {
            number: ["123456789", "987654321"],
        });
    },
};