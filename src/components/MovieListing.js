import {
  getAllMovies,
  getAllShows,
  getLoading,
} from "../features/movies/movieSlice";

import MovieCard from "./MovieCard";
import React from "react";
import { Settings } from "../assets/carousel-settings";
import Slider from "react-slick";
import { useSelector } from "react-redux";

function MovieListing() {
  const _movies = useSelector(getAllMovies);
  const loading = useSelector(getLoading);

  let renderMovies = "";

  renderMovies =
    _movies.Response === "True" ? (
      _movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{_movies.Error}</h3>
      </div>
    );

  const _shows = useSelector(getAllShows);

  let renderShows =
    _shows.Response === "True" ? (
      _shows?.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{_shows.Error}</h3>
      </div>
    );

  return loading ? (
    <div>loading..</div>
  ) : (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
