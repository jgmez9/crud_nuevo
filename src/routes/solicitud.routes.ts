import { Router } from "express";
import { aprobarSolicitud, crearSolicitud } from "../controllers/solicitud.controller.js";
import { validate } from "../middlewares/validation.middleware.js";
import { crearSolicitudSchema } from "../dto/solicitud.dto.js";

const router = Router();

router.post("/", validate(crearSolicitudSchema), crearSolicitud);
router.patch("/:id/aprobar", aprobarSolicitud);

export default router;