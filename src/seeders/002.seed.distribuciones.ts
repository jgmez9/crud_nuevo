import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.bulkInsert("Distribuciones", [
    {
      id_distribuciones: randomUUID(),
      name: "Distribuidora Principal",
      nit: "900123456-1",
      address: "Dirección pendiente",
      phone: "3000000000",
      state: "Activo",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Distribuciones", {});
};