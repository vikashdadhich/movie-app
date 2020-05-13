import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
//import  Modal  from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Movie.css';
export default class MovieList extends Component {
    static PropTypes = {
        movies: PropTypes.object,
    }

    state = {
        topMovies: null,
        orderBy: 'rank',
        movieList: null,
        movie: null,
        displayModal: false,
    }

    getMoviesByOrder(orederBy) {
        // if (orderBy === 'rank') {


        // }
    }

    getOptions() {
        const orderSelect = this.props.movies.components
            .filter((movie) => { return movie.type === 'order-select' });

        return orderSelect[0].items
            .map((movie) => {
                return {
                    key: movie.label,
                    value: movie.valueToOrderBy,
                    text: movie.label,
                }
            });
    }
    componentDidMount() {
        this.setState({
            topMovies: this.props.movies,
            movieList: this.props.movies.components
                .filter((movie) => { return movie.type === 'movie-list' }).map((m) => { return m.items })[0],
        })
    }

    handleSelect(e, value) {

        if (value === 'rank') {
            const sortedMovieByRank = this.state.movieList.sort((a, b) => a.rank - b.rank);
            this.setState({ movieList: sortedMovieByRank });
        } else if (value === 'releaseDate') {
            const sortedMovieByDate = this.state.movieList.sort((a, b) => a.releaseDate - b.releaseDate);
            this.setState({ movieList: sortedMovieByDate });

        }
    }
    handleClick(movie, key) {
        this.setState({ movie: movie, keyOfmovie: key });
    }
    render() {
        const options = this.getOptions();
        const { movie } = this.state;
        return (
            <div className="movie-app">
                <h3>Click On the image to see details</h3>
                <label>Order By</label>
                <Dropdown
                    className="dropdown-movie"
                    placeholder='Select Order'
                    fluid
                    selection
                    options={options}
                    onChange={(e, { value }) => this.handleSelect(e, value)}
                />

                <div className="movie-card">
                    {this.state.movieList && this.state.movieList
                        .map((movie1, key) => {
                            //return movie.map((item) => {

                            return (

                                <div key={key} className="image-list">
                                    <Image src={movie1.imageUrl} spaced={true}
                                        onClick={() => this.handleClick(movie1, key)} />
                                    {this.state.keyOfmovie === key &&
                                        <List>
                                            <List.Item>
                                                <List.Header>Title</List.Header>
                                                <List.Description>
                                                    {movie.title}
                                                </List.Description>
                                            </List.Item>
                                            <List.Item>
                                                <List.Header>Synopsis</List.Header>
                                                <List.Description>
                                                    {movie.synopsis}
                                                </List.Description>
                                            </List.Item>
                                            <List.Item>
                                                <List.Header>Rank</List.Header>
                                                <List.Description>
                                                    {movie.rank}
                                                </List.Description>
                                            </List.Item>
                                            <List.Item>
                                                <List.Header>Release Date</List.Header>
                                                <List.Description>
                                                    {movie.releaseDate}
                                                </List.Description>
                                            </List.Item>
                                        </List>

                                    }
                                </div>

                            )

                        })}

                </div>

            </div>
        )
    }
}