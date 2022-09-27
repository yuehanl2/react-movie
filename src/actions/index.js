import moviedb from '../apis/moviedb';

const API_KEY = 'f65a95b51f28aed8c5213b73c573a0e2';

export const fetchMovies = (num) => async (dispatch) => {
  const response = await moviedb.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=${num}`
  );
  dispatch({ type: 'FETCH_MOVIES', payload: response.data.results });
};
