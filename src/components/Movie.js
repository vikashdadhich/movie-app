
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
export default class Movie extends Component {

    static PropTypes = {
        topMovies: PropTypes.object,
        fetchMovieList: PropTypes.func,
    }

    componentDidMount() {
        this.props.fetchMovieList();  
    } 
    
    render() {

        return (
            <div className="app">
                {this.props.topMovies.components && <MovieList movies={this.props.topMovies} />}
            </div>
        );
    }
}