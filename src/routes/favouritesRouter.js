import { Router } from "express";
import {
  fetchFavouritesByIdController,
  addFavouritesController,
} from "../controllers/favouritesControlller";

export const favouritesRouter = Router();

favouritesRouter.get("/:id", fetchFavouritesByIdController);

favouritesRouter.post("/", addFavouritesController);
