import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = (props) => {
  return (
    <>
      <div className="cards-container">
        <div className="cards-row">
          {props.movies.map((movie) => {
            return (
              <div className="card">
                <Movie imgsrc={movie.url} movieTitle={movie.movie_name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
