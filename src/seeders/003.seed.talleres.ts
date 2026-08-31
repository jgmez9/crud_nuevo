import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.bulkInsert("Talleres", [
      {
        id_taller: randomUUID(),
        name: "Taller Mecánico Principal",
        nit: "901234567-1",
        address: "Dirección de prueba",
        phone: "3001234567",
        responsable: "Responsable Principal",
        state: "Activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_taller: randomUUID(),
        name: "Taller Mecánico Norte",
        nit: "901234568-2",
        address: "Dirección de prueba 2",
        phone: "3007654321",
        responsable: "Responsable Norte",
        state: "Activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }

  export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Distribuciones", {});
};