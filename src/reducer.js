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

    default:
      return state;
  }
  return newState;
};

export default reducer;
