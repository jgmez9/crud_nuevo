import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  const solicitudes = (await context.sequelize.query(
    `SELECT id_solicitud FROM "Solicitudes"`,
    { type: "SELECT" }
  )) as Array<{ id_solicitud: string }>;

  const repuestos = (await context.sequelize.query(
    `SELECT id_repuesto, name FROM "Repuestos"`,
    { type: "SELECT" }
  )) as Array<{ id_repuesto: string; name: string }>;

  const solicitud = solicitudes[0];
  const repuesto1 = repuestos[0];
  const repuesto2 = repuestos[1];

  if (!solicitud) {
    throw new Error("No existen solicitudes. Ejecuta primero el seeder de Solicitudes.");
  }

  if (!repuesto1 || !repuesto2) {
    throw new Error("No existen suficientes repuestos. Ejecuta primero el seeder de Repuestos.");
  }

  await context.bulkInsert("Detalle_solicitud", [
    {
      id_detalle: randomUUID(),
      cantidad: 5,
      id_solicitud: solicitud.id_solicitud,
      id_repuesto: repuesto1.id_repuesto,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_detalle: randomUUID(),
      cantidad: 2,
      id_solicitud: solicitud.id_solicitud,
      id_repuesto: repuesto2.id_repuesto,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Detalle_solicitud", {});
};