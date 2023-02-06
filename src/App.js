import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ErrorPage from "./layouts/ErrorPage";
import Home from "./components/Home";
import MasterPage from "./layouts/Master";
import MovieDetails from "./components/MovieDetails";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<MasterPage />} errorElement=<ErrorPage />>
      <Route index element={<Home />} />
      <Route path="movies/:id" element={<MovieDetails />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
