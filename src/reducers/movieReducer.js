// maintain an array of fetched movies
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
