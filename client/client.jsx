// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

let state;

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    state = data;
    console.log("Got the data", data);
    render();
  });

function render() {
  // ReactDOM.hydrate(<App {...state} />, document.querySelector("#Container"));
}

// render();
