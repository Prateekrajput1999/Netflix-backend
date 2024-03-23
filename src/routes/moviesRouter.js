import { Router } from "express";
import {
  fetchAllMoviesController,
  fetchMovieByIdController,
} from "../controllers/moviesController.js";

export const moviesRouter = Router();

moviesRouter.get("/", fetchAllMoviesController);

moviesRouter.get("/:id", fetchMovieByIdController);
