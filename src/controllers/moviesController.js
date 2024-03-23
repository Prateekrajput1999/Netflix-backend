import {
  fetchAllMoviesService,
  fetchMovieByIdService,
} from "../services/moviesService.js";

export const fetchAllMoviesController = async (req, res, next) => {
  try {
    return res.json(await fetchAllMoviesService());
  } catch {
    throw new Error("Unable to fetch all movies");
  }
};

export const fetchMovieByIdController = async (req, res, next) => {
  try {
    const movie = await fetchMovieByIdService(req?.params?.id);
    if (!movie) {
      res.status(404);
      res.send("Movie not found with this ID :(");
    }
    return res.json(await fetchMovieByIdService(req?.params?.id));
  } catch {
    res.status(500);
  }
};
