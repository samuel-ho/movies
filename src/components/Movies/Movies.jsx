import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="cards-container">
      {movies.map((movie) => {
        return <Movie imgsrc={movie.url} movieTitle={movie.movie_name} />;
      })}
    </div>
  );
};

export default Movies;
