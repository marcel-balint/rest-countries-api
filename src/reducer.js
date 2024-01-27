const reducer = (state, action) => {
  if (!state) {
    return state;
  }
  const newState = [...state];

  console.log(action);
  switch (action.type) {
    case "ADD":
      newState.push(action.payload);
      console.log(newState);
      break;

    default:
      return state;
  }
  return newState;
};

export default reducer;
