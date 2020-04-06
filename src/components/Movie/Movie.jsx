import React from "react";
import "../Movie/Movie.css";

const Movie = ({ imgsrc, movieTitle }) => {
  return (
    <div className="card">
      <img src={imgsrc} alt="Movie Img" className="card-img-top" />
      <h4 className="card-genre"> Movies </h4>
      <p className="card-title">{movieTitle}</p>
    </div>
  );
};

export default Movie;
