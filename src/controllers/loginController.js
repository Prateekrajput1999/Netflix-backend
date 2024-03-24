import { fetchUserByEmailService } from "../services/userService";
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

    const isPasswordValid = bcrypt.compare(password, existingUser?.password);

    if(isPasswordValid) {
        // logic to create a new session here and return. 
    }

    return res.status(400).send({
        status: "FAILED",
        error: "Invalid password.",
    })

  } catch {
    res.status(500).send("Internal server error");
  }
};
