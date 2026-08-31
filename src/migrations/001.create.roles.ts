import { DataTypes, type QueryInterface } from "sequelize";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable("Roles", {
    id_rol: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.dropTable("Roles");
};