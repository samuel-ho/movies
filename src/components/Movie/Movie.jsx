import React from "react";
import "../Movie/Movie.css";

const Movie = ({ imgsrc, movieTitle }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imgsrc} alt="Movie Img" />
      <h4 className="card-genre"> Movies </h4>
      <p className="card-title">{movieTitle}</p>
    </div>
  );
};

export default Movie;
