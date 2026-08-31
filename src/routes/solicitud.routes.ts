import { Router } from "express";
import { aprobarSolicitud } from "../controllers/solicitud.controller.js";

const router = Router();

router.patch("/:id/aprobar", aprobarSolicitud);

export default router;
