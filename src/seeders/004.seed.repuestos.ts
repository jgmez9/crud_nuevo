import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.bulkInsert("Repuestos", [
      {
        id_repuesto: randomUUID(),
        name: "Filtro de aceite",
        code: "REP-001",
        description: "Filtro de aceite para motor",
        price: "25000.00",
        state: "Activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_repuesto: randomUUID(),
        name: "Pastillas de freno",
        code: "REP-002",
        description: "Juego de pastillas de freno delanteras",
        price: "85000.00",
        state: "Activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_repuesto: randomUUID(),
        name: "Bujía",
        code: "REP-003",
        description: "Bujía para motor",
        price: "18000.00",
        state: "Activo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }

  export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Distribuciones", {});
};