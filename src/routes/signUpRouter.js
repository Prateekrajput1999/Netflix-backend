import { Router } from "express";
import { signUpController } from "../controllers/signUpController.js";

export const signUpRouter = Router();

signUpRouter.post('/', signUpController)