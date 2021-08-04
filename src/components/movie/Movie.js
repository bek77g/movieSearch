import React from 'react'
import "./Movie.css"

const Movie = ({movieCard}) => {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator card__img" alt="movie-poster" src={movieCard.Poster === "N/A"
                ? `https://via.placeholder.com/468?text=${movieCard.Title}`
                : movieCard.Poster}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movieCard.Title}</span>
                <div className="card__descr">
                    <p>{movieCard.Year}</p>
                    <p>{movieCard.Type}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie
