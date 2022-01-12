import React from "react";
import {data} from './data'
import MovieProps from "./MovieProps";



function MovieList (props) {
    return(
        <>
        <div>
            {data.map((movie) => 
            <MovieProps

            title = {movie.title}
            src = {movie.src}
            description = {movie.description}
            href = {movie.movieUrl}
            />
            )};
        </div>
        </>
    )
}
export default MovieList;