import { DataTypes, type QueryInterface } from "sequelize";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable("Solicitudes", {
    id_solicitud: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_bodega: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Bodega",
        key: "id_bodega",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },

    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id_user",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },

    id_taller: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Talleres",
        key: "id_taller",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
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
  await context.dropTable("Solicitudes");
};