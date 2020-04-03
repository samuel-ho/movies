import React, { useState, useEffect } from "react";
import MovieView from "./components/MovieView/MovieView";
import Navigation from "./components/Navigation/Navigation";
import mockData from "./assets/movies.json";
import "./App.css";

const App = () => {
  const [movies, updateMovies] = useState([]);

  useEffect(() => {
    updateMovies(mockData);
  });

  return (
    <div className="App">
      <Navigation />
      <MovieView movies={movies} />
    </div>
  );
};

export default App;
