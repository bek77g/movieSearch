import React, { Component } from 'react'
import ReactPaginate from "react-paginate";
import "./Search.css"

export class Search extends Component {
    state={
        searchInput: '',
        type: "",
        page: 1
    };
    handlePageClick = this.handlePageClick.bind(this);

    componentDidMount() {
        this.setState(() => ({
            searchInput: localStorage.getItem('searchInput'),
            type: localStorage.getItem('type'),
            page: +localStorage.getItem('page')
        }), () => {
            this.props.searchMedia(this.state.searchInput, this.state.type, this.state.page)
        });
    }

    searchBtnFunc = () => {
        this.setState({page: 1, type: ''})
        this.props.searchMedia(this.state.searchInput, this.state.type, 1);
    };

    handleChange = (e) => {
        this.setState(() => ({type: e.target.value, page: 1}), () => {
            this.props.searchMedia(this.state.searchInput, this.state.type, 1)
        });
    };

    inputKeyDown = (e) => {
        if (e.code === 'Enter') {
            this.searchBtnFunc()
        }
    };

    handlePageClick({selected: selectedPage}) {
        this.setState(() => ({
            page: selectedPage+1,
        }), () => {
            this.props.searchMedia(this.state.searchInput, this.state.type, this.state.page)
        });
    };

    componentDidUpdate() {
        localStorage.setItem('searchInput', this.state.searchInput)
        localStorage.setItem('type', this.state.type)
        localStorage.setItem('page', this.state.page)
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field">
                        <input placeholder="Movies, series, games" 
                                type="search" 
                                className="validate" 
                                onChange={(e) => this.setState({searchInput: e.target.value})}
                                onKeyDown={this.inputKeyDown}
                                value={this.state.searchInput}/>
                        <button value={this.state.searchInput} className="btn search__btn" onClick={this.searchBtnFunc}>Search</button>
                    </div>
                </div>
                <div className="search__form">
                    <p>
                        <label>
                            <input value="" name="type" type="radio" checked={this.state.type === ''} onChange={this.handleChange}/>
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input value="movie" name="type" type="radio" checked={this.state.type === 'movie'} onChange={this.handleChange}/>
                            <span>Movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input value="series" name="type" type="radio" checked={this.state.type === 'series'} onChange={this.handleChange}/>
                            <span>Series</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input value="game" name="type" type="radio" checked={this.state.type === 'game'} onChange={this.handleChange}/>
                            <span>Games</span>
                        </label>
                    </p>
                </div>
                {this.props.pages > 1
                ? <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={this.props.pages}
                onPageChange={this.handlePageClick}
                initialPage={1}
                forcePage={this.state.page-1}
                initialPage={+localStorage.getItem('page')-1}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                />
                : ""}          
            </div>
        )
    }
}

export default Search
