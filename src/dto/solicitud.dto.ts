import { z } from "zod";

export const crearSolicitudSchema = z.object({
  id_taller: z.string().pipe(z.uuid({ message: "id_taller debe ser un UUID válido" })),
  id_bodega: z.string().pipe(z.uuid({ message: "id_bodega debe ser un UUID válido" })),
  id_user: z.string().pipe(z.uuid({ message: "id_user debe ser un UUID válido" })),
  detalles: z
    .array(
      z.object({
        id_repuesto: z.string().pipe(z.uuid({ message: "id_repuesto debe ser un UUID válido" })),
        cantidad: z.number().int().positive("La cantidad debe ser mayor que cero"),
      })
    )
    .min(1, "La solicitud debe incluir al menos un repuesto"),
});

export type CrearSolicitudDTO = z.infer<typeof crearSolicitudSchema>;