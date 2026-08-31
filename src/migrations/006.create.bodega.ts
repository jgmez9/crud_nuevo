import { DataTypes, type QueryInterface } from "sequelize";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable("Bodega", {
      id_bodega: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      id_distribuciones: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: "Distribuciones",
          key: "id_distribuciones",
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
  }

    export const down = async ({ context }: { context: QueryInterface }) => {
  await context.dropTable("Bodega");
}
