import moviedb from '../apis/moviedb';
import { API_KEY } from '../constants';

export const fetchMovies =
  (page = 1) =>
  async (dispatch) => {
    const response = await moviedb.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    dispatch({ type: 'FETCH_MOVIES', payload: response.data.results });
  };

function sortAction(curType, curstate) {
  return {
    type: curType,
    payload: curstate,
  };
}

export const actions = {
  sortAction,
};
