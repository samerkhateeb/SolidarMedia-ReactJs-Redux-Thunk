import React, { useEffect } from "react";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies("Action"));
    dispatch(fetchAsyncShows("Action"));
  }, [dispatch]);

  return (
    <div className="banner-img ">
      <MovieListing />
    </div>
  );
}

export default Home;
