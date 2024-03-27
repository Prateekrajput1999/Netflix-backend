import "dotenv/config";

export const JWT_CONFIG = {
  secret_key: process.env.JWT_SECRET_KEY,
};
