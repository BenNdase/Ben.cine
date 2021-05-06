import React from "react";

const Movie = ({title,poster_path,vote_average,overview}) => {

const movieImage = "https://image.tmbd.org/t/p/w1280";
    return(
        <div className="movie">
            <img src={movieImage + poster_path} alt={title} />
        </div>
    )
}
export default Movie;