import React from 'react';
import '../Movie/Movie.css';

const Movie = (props) => {
    return (
        <div className="card-container">
            <div className="card">
            <img src={props.imgsrc} alt="Movie Img" height="250" width="375" className="card-img-top"/>
            </div>
            <h4 className="card-genre"> Movies </h4>
            <p className="card-title">
        {props.movieTitle}
            </p>       
        </div>
    )
}

export default Movie;





