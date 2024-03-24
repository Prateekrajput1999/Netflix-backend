import { getDatabase } from "./storageService.js";

export const fetchUserByEmailService = async (email) => {
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
