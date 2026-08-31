import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.bulkInsert("Roles", [
    {
      id_rol: randomUUID(),
      name: "Administrador",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_rol: randomUUID(),
      name: "Gestor",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Roles", {
    name: ["Administrador", "Gestor"],
  });
};