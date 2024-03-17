var express = require("express");
var app = express();
var helloRouter = require("./routes/hello");
app.use(express.static(`${__dirname}/static`));
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use("/hello", helloRouter);

app.get("*", (req, res) => {
  res.status(404).send("This express app couldn't find any route");
});

app.listen(3000);
