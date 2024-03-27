import { Router } from "express";
import { LoginController } from "../controllers/loginController.js";

export const LoginRouter = Router();

LoginRouter.post("/", LoginController);
