import React, { Component } from 'react'
import axios from "axios"
import "./Main.css"
import Search from '../search/Search.js';
import Movies from '../movies/Movies.js';

export class Main extends Component {
    state = {
        movies: [],
        preLoad: false,
        pages: 0
    };

    searchMedia = (str, type, page) => {
        this.setState({preLoad: true})
        axios(`https://www.omdbapi.com/?apikey=a43badfc&s=${str}&type=${type}&page=${page}`)
        .then(({data})=> this.setState({movies: data.Search, preLoad: false, pages: Math.ceil(data.totalResults / 10)}));
    }
    

    render() {
        return (
            <main className="container content">
                <Search searchMedia={this.searchMedia} pages={this.state.pages}/>
                {this.state.preLoad
                ? <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : ''}
                <Movies movies={this.state.movies}/>
                {this.state.preLoad
                ? <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                : ''}
            </main>
        )
    }
}

export default Main
