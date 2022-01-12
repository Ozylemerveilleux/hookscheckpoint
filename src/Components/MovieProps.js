import React from "react";
import StarRatings from './StarRating';

function MovieProps (props) {
    return (
        <div>
            <img src ={props.src} alt = {props.title}/>
                <h2> {props.title} </h2>
                <h4> {props.description} </h4>
                <a href={props.href}><h4>MovieUrl</h4></a>
                <StarRatings/>
        </div>
    )
}
export default MovieProps;