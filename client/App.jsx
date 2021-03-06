// @ts-check

import React from "react";

export const App = ({ questions, answers, handleModifyAnswerVotes }) => {
  return (
    <div>
      <h1>Q&A Tool</h1>

      {questions.map(({ questionId, content }, i) => (
        <div key={questionId}>
          <h3>{content}</h3>
          <div>
            {answers
              .filter((answer) => answer.questionId == questionId)
              .map(({ content, upvotes, answerId }) => (
                <div key={answerId}>
                  <span>
                    {content} - {upvotes}&nbsp;&nbsp;&nbsp;
                  </span>
                  <button onClick={() => handleModifyAnswerVotes(answerId, 1)}>+</button>
                  <button onClick={() => handleModifyAnswerVotes(answerId, -1)}>-</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
