const flatsReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialization
    return [];
  }

  // TODO: Handle some actions
  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
