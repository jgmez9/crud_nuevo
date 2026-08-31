import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Room", [
            {
                id: uuidv4(),
                name: "Aula 101",
                type: "CLASSROOM",
                capacity: 35,
                campus_id: uuidv4(),
            },
            {
                id: uuidv4(),
                name: "Laboratorio de Sistemas",
                type: "LAB",
                capacity: 25,
                campus_id: uuidv4(),
            },
            {
                id: uuidv4(),
                name: "Auditorio Principal",
                type: "AUDITORIUM",
                capacity: 120,
                campus_id: uuidv4(),
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Room", {
            name: ["Aula 101", "Laboratorio de Sistemas", "Auditorio Principal"],
        });
    },
};