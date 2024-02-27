import { Router } from "express";
const router = Router();
import { createUserData } from "../controllers/users.controller.js";

router.post("/createUserData", createUserData);

export default router;
