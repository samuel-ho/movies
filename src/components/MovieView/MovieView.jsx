import React from "react";
import Movies from "../Movies/Movies";

const MovieView = (props) => {
  return <Movies movies={props.movies} />;
};

export default MovieView;
