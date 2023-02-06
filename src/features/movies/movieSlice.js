import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import mApi from "../../apis/mApi";
import { mApiKey } from "../../apis/mApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await mApi.get(`?apiKey=${mApiKey}&s=${term}&type=movie`);

    return response.data;
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "movies/fetchSingleMovie",
  async (id) => {
    const url = `?apiKey=${mApiKey}&i=${id}&Plot=full`;

    const response = await mApi.get(url);

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await mApi.get(`?apiKey=${mApiKey}&s=${term}&type=series`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  movie: {},
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovie: (state) => {
      state.movie = {};
    },
  },
  extraReducers: {
    // fetchmovies Async Thunk will have additional action creators, the action creator will define the life cycle  of Async Request
    // will define all the Async Life Cycle
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, loading: true };
      //   console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      //   console.log("rejected");
    },

    [fetchAsyncShows.pending]: (state) => {},
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncShows.rejected]: () => {
      //   console.log("Shows rejected");
    },

    [fetchSingleMovie.fulfilled]: (state, { payload }) => {
      //   console.log("fullfilled");
      return { ...state, movie: payload, loading: false };
    },

    [fetchSingleMovie.pending]: (state) => {
      //   console.log("fullfilled");
      return { ...state, loading: true };
    },
  },
});

// add function
// state.movies.movies means name of our slice, then property, that's why movies.movies
export const { removeMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getLoading = (state) => state.movies.loading;
export const getAllShows = (state) => state.movies.shows;
export const getSingleMovie = (state) => state.movies.movie;

export default movieSlice.reducer;
