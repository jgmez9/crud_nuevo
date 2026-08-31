import { Router } from "express";
import solicitudRoutes from "./solicitud.routes.js";

const router = Router();

router.use("/solicitudes", solicitudRoutes);

export default router;