import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  const bodegas = (await context.sequelize.query(
    `SELECT id_bodega, name FROM "Bodega"`,
    { type: "SELECT" }
  )) as Array<{ id_bodega: string; name: string }>;

  const repuestos = (await context.sequelize.query(
    `SELECT id_repuesto, name FROM "Repuestos"`,
    { type: "SELECT" }
  )) as Array<{ id_repuesto: string; name: string }>;

  const bodega = bodegas[0];

  if (!bodega) {
    throw new Error("No existen bodegas. Ejecuta primero el seeder de Bodega.");
  }

  const repuesto1 = repuestos[0];
  const repuesto2 = repuestos[1];

  if (!repuesto1 || !repuesto2) {
    throw new Error("No existen suficientes repuestos. Ejecuta primero el seeder de Repuestos.");
  }

  await context.bulkInsert("Inventario", [
    {
      id_inventario: randomUUID(),
      cantidad: 20,
      id_bodega: bodega.id_bodega,
      id_repuesto: repuesto1.id_repuesto,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_inventario: randomUUID(),
      cantidad: 10,
      id_bodega: bodega.id_bodega,
      id_repuesto: repuesto2.id_repuesto,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Inventario", {});
};