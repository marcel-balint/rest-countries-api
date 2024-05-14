const reducer = (state, action) => {
  if (!state) {
    return state;
  }
  const newState = [...state];
  switch (action.type) {
    case "ADD_FIRST_QUESTION":
      newState.push(action.payload);
      break;

    case "ADD_QUESTION":
      // Add a question to incoming country
      const country = newState.filter(
        (el) => el.country === action.payload.country
      );
      country[0].questions.push(action.payload.question);
      break;

    case "EDIT_QUESTION":
      const theCountry = newState.filter(
        (el) => el.country === action.payload.country.country
      );
      const theQuestion = theCountry[0].questions.filter(
        (question) => question.id === action.payload.id
      );
      theQuestion[0].questionText = action.payload.question;
      break;

    case "ADD_ANSWER":
      // Find the country
      const countryWithQuestion = newState.find(
        (el) => el.country === action.country.country
      );

      if (countryWithQuestion) {
        // Find the question within the country
        const question = countryWithQuestion.questions.find(
          (q) => q.id === action.questionId
        );

        if (question) {
          // Add the answer to the question
          question.answers.push(action.answer);
        }
      }
      break;

    case "TOGGLE_ANSWER_FIELD":
      newState[0].answerFieldVisible = action.payload;
      break;

    case "CLOSE_ANSWER_FIELD":
      newState[0].answerFieldVisible = action.payload;
      break;

    case "REPLY_TO_ANSWER":
      // Find the country
      const countryWithReplies = newState.find(
        (el) => el.country === action.payload.country.country
      );
      if (countryWithReplies) {
        // Find the question within the country
        const question = countryWithReplies.questions.find(
          (q) => q.id === action.payload.questionId
        );

        if (question) {
          // Find a certain answer by ID
          const answer = question.answers.find(
            (answer) => answer.id === action.payload.answerId
          );
          const reply = {
            id: action.payload.replyId,
            text: action.payload.replyText,
          };
          answer.replies.push(reply);
        }
      }

      break;

    default:
      return state;
  }
  console.log(newState);
  return newState;
};

export default reducer;
