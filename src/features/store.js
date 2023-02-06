import { configureStore } from "@reduxjs/toolkit";
import moveisReducer from "./movies/movieSlice";

export const store = configureStore({
  reducer: { movies: moveisReducer },
});
