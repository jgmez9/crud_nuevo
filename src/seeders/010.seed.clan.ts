import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    up: async (queryInterface: QueryInterface) => {
        // Se insertan registros de prueba para la tabla 'Clan', cumpliendo con las 
        // restricciones de foreign keys (schedule_id, type_route_id, room_id, tl_id) 
        // utilizando UUIDs simulados para cada relación obligatoria.
        await queryInterface.bulkInsert("Clan", [
            {
                id: uuidv4(),
                name: "Clan Alpha",
                schedule_id: uuidv4(),
                type_route_id: uuidv4(),
                room_id: uuidv4(),
                tl_id: uuidv4(),
            },
            {
                id: uuidv4(),
                name: "Clan Beta",
                schedule_id: uuidv4(),
                type_route_id: uuidv4(),
                room_id: uuidv4(),
                tl_id: uuidv4(),
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        // Nota: En el método down de tu migración original tenías 'Room' por error, 
        // pero aquí se apunta correctamente a 'Clan' para limpiar la tabla que se crea.
        // Además, se corrigió el parámetro queryInferface a queryInterface.
        await queryInterface.bulkDelete("Clan", {
            name: ["Clan Alpha", "Clan Beta"],
        });
    },
};