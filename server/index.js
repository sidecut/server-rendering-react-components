// @ts-check

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>React is excellent!</h1>");
});

app.listen(7777);
console.log("Server is listening");
