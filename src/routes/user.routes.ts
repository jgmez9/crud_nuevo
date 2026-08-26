import { Router } from "express";
import { getUSers , createUsers} from "../controllers/user.controller.js";

const router = Router();

router.get("/",getUSers)
router.post("/",createUsers)

export default router;