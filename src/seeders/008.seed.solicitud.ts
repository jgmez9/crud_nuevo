import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";

export const up = async ({ context }: { context: QueryInterface }) => {
  const bodegas = (await context.sequelize.query(
    `SELECT id_bodega, name FROM "Bodega"`,
    { type: "SELECT" }
  )) as Array<{ id_bodega: string; name: string }>;

  const users = (await context.sequelize.query(
    `SELECT id_user, name FROM "Users"`,
    { type: "SELECT" }
  )) as Array<{ id_user: string; name: string }>;

  const talleres = (await context.sequelize.query(
    `SELECT id_taller, name FROM "Talleres"`,
    { type: "SELECT" }
  )) as Array<{ id_taller: string; name: string }>;

  const bodega = bodegas[0];
  const user = users[0];
  const taller = talleres[0];

  if (!bodega) {
    throw new Error("No existen bodegas. Ejecuta primero el seeder de Bodega.");
  }

  if (!user) {
    throw new Error("No existen usuarios. Ejecuta primero el seeder de Users.");
  }

  if (!taller) {
    throw new Error("No existen talleres. Ejecuta primero el seeder de Talleres.");
  }

  await context.bulkInsert("Solicitudes", [
    {
      id_solicitud: randomUUID(),
      fecha_solicitud: new Date(),
      state: "Pendiente",
      id_bodega: bodega.id_bodega,
      id_user: user.id_user,
      id_taller: taller.id_taller,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_solicitud: randomUUID(),
      fecha_solicitud: new Date(),
      state: "Aprobada",
      id_bodega: bodega.id_bodega,
      id_user: user.id_user,
      id_taller: taller.id_taller,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Solicitudes", {});
};