import { DataTypes, type QueryInterface } from "sequelize";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable("Detalle_solicitud", {
    id_detalle: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_solicitud: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Solicitudes",
        key: "id_solicitud",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },

    id_repuesto: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Repuestos",
        key: "id_repuesto",
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

  
  await context.addConstraint("Detalle_solicitud", {
    fields: ["id_solicitud", "id_repuesto"],
    type: "unique",
    name: "unique_solicitud_repuesto",
  });
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.dropTable("Detalle_solicitud");
};