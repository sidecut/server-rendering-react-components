// @ts-check

import React from "react";

export const App = ({ questions, answers }) => {
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
                  {content} - {upvotes}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
