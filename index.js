import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connectDb } from "./src/services/storageService.js";
import { moviesRouter } from "./src/routes/moviesRouter.js";
import { signUpRouter } from "./src/routes/signUpRouter.js";
import { LoginRouter } from "./src/routes/loginRouter.js";
import { favouritesRouter } from "./src/routes/favouritesRouter.js";

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use("*", (req, res, next) => {
  console.log("Incoming server request...");
  next();
});

app.use("/movies", moviesRouter);

app.use("/signup", signUpRouter);

app.use("/login", LoginRouter);

app.use("/favourites", favouritesRouter)

app.get("*", (req, res) => {
  res.status(404).send({
    staus: "FAILED",
    error: "This express app couldn't find any route",
  })
});

const runServer = async () => {
  await connectDb();
  app.listen(3003);
};

runServer();
