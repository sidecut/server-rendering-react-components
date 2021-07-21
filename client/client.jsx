// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import { handleModifyAnswerVotes } from "../shared/utility";
import { App } from "./App";

let state;

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    state = data;
    console.log("Got the data", data);
    render();
  });

function handleVote(answerId, increment) {
  fetch(`/api/vote/${answerId}?increment=${increment}`, {
    method: "POST",
  }).then(() => {
    state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);
    render();
  });
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModifyAnswerVotes={handleVote} />,
    document.querySelector("#Container")
  );
}

// render();
