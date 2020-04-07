import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="cards-container">
      {movies.map((movie, index) => {
        return (
          <Movie key={index} imgsrc={movie.url} movieTitle={movie.movie_name} />
        );
      })}
    </div>
  );
};

export default Movies;
