import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        // Nota: En tu migración definiste el campo 'name' como DataTypes.UUID 
        // y 'city_id' como DataTypes.STRING. (Parece un pequeño cruce de tipos en la migración),
        // pero para el seeder asignamos un UUID simulado en name y una cadena en city_id.
        await queryInterface.bulkInsert("Campus", [
            {
                id: uuidv4(),
                name: uuidv4(),
                city_id: "BOG",
                address: "Calle Principal # 45-20",
            },
            {
                id: uuidv4(),
                name: uuidv4(),
                city_id: "MDE",
                address: "Avenida El Poblado # 10-30",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete("Campus", {
            address: ["Calle Principal # 45-20", "Avenida El Poblado # 10-30"],
        });
    },
};