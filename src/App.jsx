import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import FilterContainer from "./components/Filter/FilterContainer/Filter";
import MovieView from "./components/MovieView/MovieView";
import mockData from "./assets/movies.json";
import "./App.css";

const App = () => {
  const [movies, updateMovies] = useState([]);

  useEffect(() => {
    fetch(mockData).then((data) => {
      updateMovies(mockData);
    });
  }, []);

  return (
    <>
      <Navigation />
      <FilterContainer />
      <MovieView movies={movies} />
    </>
  );
};

export default App;
