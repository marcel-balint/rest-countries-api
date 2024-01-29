const reducer = (state, action) => {
  if (!state) {
    return state;
  }
  const newState = [...state];

  switch (action.type) {
    case "ADD_FIRST_QUESTION":
      newState.push(action.payload);
      console.log(newState);
      break;
    case "ADD_QUESTION":
      // Add a question to incoming country
      const country = newState.filter(
        (el) => el.country === action.payload.country
      );
      country[0].questions.push(action.payload.question);
      console.log(newState);
      break;

    default:
      return state;
  }
  return newState;
};

export default reducer;
