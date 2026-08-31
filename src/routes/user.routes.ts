import { Router } from "express";
import { createUser} from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/user.validations.js";

const router = Router();


router.post("/",validateUser,createUser)
/*router.get("/",getUSers)
router.get("/:id",getUsersbyId)
router.put("/:id",updateUsers)
router.delete("/:id",deleteUsers)
*/

export default router;
