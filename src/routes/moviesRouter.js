import { Router } from "express";
import {
  fetchAllMoviesController,
  fetchMovieByIdController,
} from "../controllers/moviesController.js";
import { authorize } from "../middlewares/authorization.js";

export const moviesRouter = Router();

moviesRouter.get("/", authorize, fetchAllMoviesController);

moviesRouter.get("/:id", authorize, fetchMovieByIdController);
