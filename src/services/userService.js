import { JWT_CONFIG } from "../configs/jwtConfig.js";
import { getDatabase } from "./storageService.js";
import jsonwebtoken from "jsonwebtoken";

export const fetchUserByEmailService = async (email) => {
  try {
    const database = getDatabase("sample_mflix");
    const usersCollection = database.collection("users");
    return await usersCollection.findOne({ email });
  } catch {
    throw new Error();
  }
};

export const fetchUserByIdService = async (id) => {
  try {
    const database = getDatabase("sample_mflix");
    const usersCollection = database.collection("users");
    return await usersCollection.findOne({ email });
  } catch {
    throw new Error();
  }
};

export const addUserToDataBaseService = async ({ email, name, password }) => {
  try {
    const database = getDatabase("sample_mflix");
    const usersCollection = database.collection("users");
    const result = await usersCollection.insertOne({ email, name, password });
    return result;
  } catch {
    throw new Error();
  }
};

export const generateAccessTokenService = ({ email, name }) => {
  try {
    const data = jsonwebtoken.sign({ email, name }, JWT_CONFIG.secret_key, {
      expiresIn: 1800,
    }); // 30 mins expiry

    return data;
  } catch {
    throw new Error();
  }
};
