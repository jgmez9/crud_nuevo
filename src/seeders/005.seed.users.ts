import type { QueryInterface } from "sequelize";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

export const up = async ({ context }: { context: QueryInterface }) => {
  const passwordAdmin = await bcrypt.hash("Admin123*", 10);
  const passwordGestor = await bcrypt.hash("Gestor123*", 10);

  const roles = (await context.sequelize.query(
    `SELECT id_rol, name FROM "Roles" WHERE name IN ('Administrador', 'Gestor')`,
    { type: "SELECT" }
  )) as Array<{ id_rol: string; name: string }>;

  const administrador = roles.find((role) => role.name === "Administrador");
  const gestor = roles.find((role) => role.name === "Gestor");

  if (!administrador || !gestor) {
    throw new Error(
      "No existen los roles Administrador y Gestor. Ejecuta primero el seeder de Roles."
    );
  }

  await context.bulkInsert("Users", [
    {
      id_user: randomUUID(),
      name: "Administrador Principal",
      email: "admin@example.com",
      password: passwordAdmin,
      state: "Activo",
      id_rol: administrador.id_rol,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_user: randomUUID(),
      name: "Gestor Principal",
      email: "gestor@example.com",
      password: passwordGestor,
      state: "Activo",
      id_rol: gestor.id_rol,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.bulkDelete("Users", {
    email: ["admin@example.com", "gestor@example.com"],
  });
};