import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        // Nota: Para insertar un registro con city_id, idealmente se debe consultar un ID existente 
        // de la tabla Cities, pero para este seeder independiente usamos un UUID generado de ejemplo.
        await queryInterface.bulkInsert("Address", [
            {
                id: uuidv4(),
                city_id: uuidv4(), 
                address: "Calle 100 # 15-20",
            },
            {
                id: uuidv4(),
                city_id: uuidv4(),
                address: "Carrera 45 # 68-12",
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        // Nota: En el método down de tu migración tenías 'Identifications' por error, 
        // pero aquí se apunta correctamente a 'Address' para limpiar la tabla que creas.
        await queryInterface.bulkDelete("Address", {
            address: ["Calle 100 # 15-20", "Carrera 45 # 68-12"],
        });
    },
};