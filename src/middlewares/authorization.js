import jsonwebtoken from "jsonwebtoken";
import { JWT_CONFIG } from "../configs/jwtConfig.js";

export const authorize = (req, res, next) => {
  try {
    const accesstoken = req?.cookies?.signup_accesstoken;
    const data = jsonwebtoken.verify(accesstoken, JWT_CONFIG.secret_key);
    if (Date.now() / 1000 - data?.exp > 0) {
      return res.status(401).send({
        status: "FAILED",
        data: "Your accesstoken has been expired. Please login again",
      });
    }

    next();
  } catch (e) {
    if (e?.name === "JsonWebTokenError") {
      return res
        .status(401)
        .send({
          status: "FAILED",
          data: "You are not authorized for this request",
        });
    }
    throw new Error();
  }
};
