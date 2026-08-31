import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  const distribuciones = (await context.sequelize.query(
    `SELECT id_distribuciones, name FROM "Distribuciones"`,
    { type: "SELECT" }
  )) as Array<{ id_distribuciones: string; name: string }>;

  const distribuidora = distribuciones[0];

  if (!distribuidora) {
    throw new Error(
      "No existen distribuidoras. Ejecuta primero el seeder de Distribuciones."
    );
  }

  await context.bulkInsert("Bodega", [
    {
      id_bodega: randomUUID(),
      name: "Bodega Principal",
      ciudad: "Barranquilla",
      address: "Dirección de prueba",
      state: "Activo",
      id_distribuciones: distribuidora.id_distribuciones,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_bodega: randomUUID(),
      name: "Bodega Norte",
      ciudad: "Barranquilla",
      address: "Dirección de prueba 2",
      state: "Activo",
      id_distribuciones: distribuidora.id_distribuciones,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Bodega", {});
};