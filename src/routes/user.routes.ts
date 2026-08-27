import { Router } from "express";
import { createUser,deleteUsers,getUSers, getUsersbyId, updateUsers} from "../controllers/user.controller.js";

const router = Router();


router.post("/",createUser)
router.get("/",getUSers)
router.get("/:id",getUsersbyId)
router.put("/:id",updateUsers)
router.delete("/:id",deleteUsers)


export default router;
