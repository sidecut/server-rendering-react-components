// @ts-check

import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";

import { App } from "../client/App";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  // res.send("<h1>React is excellent!</h1>");
  const index = readFileSync("public/index.html", "utf-8");
  const rendered = renderToString(<App />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log("Server is listening");
