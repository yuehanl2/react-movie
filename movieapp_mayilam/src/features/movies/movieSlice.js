import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const response = await movieApi.get(`/movie/popular?api_key=${APIKey}`);
    return response.data.results;
} )







const initialState ={
    movies: []
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("fetchAsyncMovies pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetchAsyncMovies Sucessful");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("fetchAsyncMovies rejected");
        }
    }  
})

export const { addMovies } = movieSlice.actions;
export const getALLMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
