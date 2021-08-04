import React from 'react'
import Movie from '../movie/Movie.js';
import "./Movies.css"


const Movies = ({movies = []}) => {
    return (
        <div className="movies">
            {movies.length
            ? movies.map(el => {
                return <Movie key={el.imdbID} movieCard={el}/>
            })
            : <img src="https://newyork.forumdaily.com/wp-content/uploads/2021/03/shutterstock_1200786709.jpg"  alt="No results" /> }
        </div>
    )
}

export default Movies