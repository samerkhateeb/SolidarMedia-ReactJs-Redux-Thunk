import React, { useState } from "react";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_image from "../images/user.png";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("term", term);
    if (!term) return;

    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">Solidar Media</Link>
        </div>

        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search Movie or Search"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="user-image">
          <img src={user_image} alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;
