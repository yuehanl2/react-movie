import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

// const movieReducer = () => {
//   return [
//     { id: '1', title: 'no scrubs', vote: '4.06', description: 'asdfdsajkkj' },
//     { id: '2', title: 'no scrubs', vote: '4.06', description: 'asdfdsajkkj' },
//     { id: '3', title: 'no scrubs', vote: '4.06', description: 'asdfdsajkkj' },
//   ];
// };

// const selectedMovieReducer = (selectedMovie = null, action) => {
//   if (action.type === 'FETCH_MOVIES') {
//     return action.payload;
//   }
//   return selectedMovie;
// };

export default combineReducers({
  movies: movieReducer,
  // selectedMovie: selectedMovieReducer,
});
