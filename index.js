import express from "express";
import path from "path";
import { connectDb } from "./src/services/storageService.js";
import { moviesRouter } from "./src/routes/moviesRouter.js";
const app = express();
const __dirname = path.resolve();
app.use(express.static(`${__dirname}/static`));
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use("*", (req, res, next) => {
  console.log("Incoming server request...");
  next();
});

app.use("/movies", moviesRouter);

app.get("*", (req, res) => {
  res.status(404).send("This express app couldn't find any route");
});

const runServer = async () => {
  await connectDb();
  app.listen(3000);
};

runServer();
