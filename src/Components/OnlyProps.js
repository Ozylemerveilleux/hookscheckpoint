import React from "react";
import MovieProps from "./MovieProps";

function OnlyProps (props){
    return(
        <div>
            {props.movies.map((movie) => 
            <MovieProps
            key = {movie.id}
            title = {movie.title}
            src = {movie.src}
            description = {movie.description}
            movieUrl = {movie.movieUrl}
            />
            )};
        </div>
    )
}
export default OnlyProps;