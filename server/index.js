// @ts-check

import express from "express";
import { readFileSync } from "fs";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  // res.send("<h1>React is excellent!</h1>");
  const index = readFileSync("public/index.html", "utf-8");
  res.send(index);
});

app.listen(7777);
console.log("Server is listening");
