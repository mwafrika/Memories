const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload.posts;
    case "CREATE":
      return action.payload.post;
    default:
      return state;
  }
};

export default reducer;
