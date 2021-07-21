export function handleModifyAnswerVotes(answers, answerId, increment) {
  if (answerId && increment)
    return answers.map((answer) => {
      if (answer.answerId === answerId) {
        return {
          ...answer,
          upvotes: answer.upvotes + Number.parseInt(increment),
        };
      } else {
        return answer;
      }
    });
  else {
    return answers;
  }
}
