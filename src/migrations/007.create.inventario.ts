import { DataTypes, type QueryInterface } from "sequelize";

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable("Inventario", {
    id_inventario: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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

  // Evita que el mismo repuesto quede duplicado dentro de la misma bodega
  await context.addConstraint("Inventario", {
    fields: ["id_bodega", "id_repuesto"],
    type: "unique",
    name: "unique_bodega_repuesto",
  });

  // La cantidad nunca puede ser negativa
  await context.addConstraint("Inventario", {
    fields: ["cantidad"],
    type: "check",
    name: "check_cantidad_no_negativa",
    where: { cantidad: { [Symbol.for("gte") as any]: 0 } },
  });
};

export const down = async ({ context }: { context: QueryInterface }) => {
  await context.dropTable("Inventario");
};