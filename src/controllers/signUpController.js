import bcrypt from "bcrypt";
import {
  fetchUserByEmailService,
  addUserToDataBaseService,
} from "../services/userService.js";

export const signUpController = async (req, res, next) => {
  try {
    // add validation
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send({
        status: "FAILED",
        error:
          "Incomplete email, password or name details. Please provide full details.",
      });
    }

    const userByEmail = await fetchUserByEmailService(email);

    if (userByEmail?._id) {
      return res.status(400).send({
        status: "FAILED",
        error: "User with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await addUserToDataBaseService({
      name,
      email,
      password: hashedPassword,
    });

    if (!result?.acknowledged) {
      throw new Error();
    }

    res.status(200).json({
      status: "SUCCESS",
      data: {
        name,
        email,
      },
    });
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};
