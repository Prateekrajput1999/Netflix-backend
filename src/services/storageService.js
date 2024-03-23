import { MongoClient } from "mongodb";
import MONGO_CONFIG from "../configs/mongoConfig.js";

export const dbClient = new MongoClient(MONGO_CONFIG.MONGO_URI);

export const getDatabase = (dbName) => {
  return dbClient.db(dbName);
};

export const connectDb = async () => {
  try {
    await dbClient.connect();
    console.log("DB Connected !");
  } catch {
    console.log("Error connecting DB using client");
  }
};
