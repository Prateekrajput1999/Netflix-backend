import {
  fetchUserByEmailService,
  generateAccessTokenService,
} from "../services/userService.js";
import bcrypt from "bcrypt";

export const LoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        status: "FAILED",
        error: "Incomplete Email or password credentials.",
      });
    }

    const existingUser = await fetchUserByEmailService(email);

    if (!existingUser) {
      return res.status(400).send({
        status: "FAILED",
        error: "Create new account to login.",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser?.password
    );

    if (isPasswordValid) {
      const data = generateAccessTokenService({
        email,
        name: existingUser?.name,
      });

      return res.status(200).send({ status: "SUCCESS", accesstoken: data });
    }

    return res.status(400).send({
      status: "FAILED",
      error: "Invalid password.",
    });
  } catch {
    res.status(500).send("Internal server error");
  }
};
