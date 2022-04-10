import React from "react";



const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ title, poster_path, popularity, vote_average }) => (
        <div className="movieCard">
            <img className="movieImage" src={IMG_API + poster_path} alt={title} />
            <div className="movieInfo">
                <h3>{title}</h3>
                <span>Rating: {vote_average}</span>
            </div>
            <div className="movieCollection">
                <h3>Amount: ${popularity + "00"}</h3>
            </div>
        </div>
    );

export default MovieCard;