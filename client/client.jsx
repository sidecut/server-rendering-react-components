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

function handleModifyAnswerVotes(answerId, increment) {
  state.answers = state.answers.map((answer) => {
    if (answer.answerId === answerId) {
      return { ...answer, upvotes: answer.upvotes + increment };
    } else {
      return answer;
    }
  });

  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes} />,
    document.querySelector("#Container")
  );
}

// render();
