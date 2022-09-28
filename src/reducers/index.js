import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import sortReducer from './sortReducer';

// const selectedMovieReducer = (selectedMovie = null, action) => {
//   if (action.type === 'FETCH_MOVIES') {
//     return action.payload;
//   }
//   return selectedMovie;
// };

export default combineReducers({
  movies: movieReducer,
  sorts: sortReducer,
  // selectedMovie: selectedMovieReducer,
});
