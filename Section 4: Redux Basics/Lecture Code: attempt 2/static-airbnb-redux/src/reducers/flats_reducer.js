// export default function (state, action) {
const flatsReducer = (state, action) => {
  // Compute and return the new state

  // Computes initial state for when the app boots
  if (state === undefined) {
    return [];
  }

  // TODO: handle actions
  //  Check type of action

  // if (action.type === "SET_FLATS") {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case "SET_FLATS":
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
