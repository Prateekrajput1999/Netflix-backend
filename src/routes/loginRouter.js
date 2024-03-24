import { Router } from "express";
import { LoginController } from "../controllers/loginController";

export const LoginRouter = Router();

LoginRouter.get("/", LoginController);
