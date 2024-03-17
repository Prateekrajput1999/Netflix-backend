var express = require("express");
var helloRouter = express.Router();
var languageGreeting = require("../lib/local");

helloRouter.get("/:name", (req, res) => {
  const { name } = req.params;
  //   res.render(`Hello ${name}`);
  res.render("hello", { title: `Hello ${name}` });
});

helloRouter.get("/:lang/:name", (req, res) => {
  const { lang, name } = req.params;
  //   res.render(`${languageGreeting?.[lang]} ${name}`);
  res.render("hello", { title: `${languageGreeting?.[lang]} ${name}` });
});

module.exports = helloRouter;
