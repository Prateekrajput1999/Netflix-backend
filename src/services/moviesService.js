import { ObjectId } from "mongodb";
import { getDatabase } from "./storageService.js";

export const fetchAllMoviesService = async () => {
  try {
    const database = getDatabase("sample_mflix");
    const moviesCollection = database.collection("movies");
    const movies = await moviesCollection.find().limit(10).toArray();
    return movies;
  } catch {
    return [];
  }
};

export const fetchMovieByIdService = async (movieId) => {
  try {
    const database = getDatabase("sample_mflix");
    const moviesCollection = database.collection("movies");
    const movie = await moviesCollection.findOne({
      _id: new ObjectId(movieId),
    });
    return movie;
  } catch (e) {
    return null;
  }
};
