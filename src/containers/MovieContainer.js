import { connect } from 'react-redux';
import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieContainer extends Component {

    componentDidMount() {
        this.props.fetchMovieList();
        this.props.topMovies && this.setState({
            topMovies: this.props.topMovies,
            movieList: this.props.topMovies.components
                .filter((movie) => { return movie.type === 'movie-list' }).map((m) => { return m.items })[0],
        }
        );
    }

    state = {
        topMovies: null,
        movieList: null,
        keyOfmovie: null,
        selectedMovie: null,
    }

    handleClick = (movie, key) => {
        this.setState({ selectedMovie: movie, keyOfmovie: key });
    }
    handleSelect = (e, value) => {

        if (value === 'rank') {
            const sortedMovieByRank = this.state.movieList.sort((a, b) => a.rank - b.rank);
            this.setState({ movieList: sortedMovieByRank, keyOfmovie:null });
        } else if (value === 'releaseDate') {
            const sortedMovieByDate = this.state.movieList.sort((a, b) => a.releaseDate - b.releaseDate);
            this.setState({ movieList: sortedMovieByDate, keyOfmovie:null });
        }
    }

    getOptions(topMovies) {
        const orderSelect = topMovies.components
            .filter((movie) => { return movie.type === 'order-select' });

          !this.state.topMovies &&  this.setState({
                topMovies: topMovies,
                movieList: topMovies.components
                    .filter((movie) => { return movie.type === 'movie-list' }).map((m) => { return m.items })[0],
            }
            );

        return orderSelect[0].items
            .map((movie) => {
                return {
                    key: movie.label,
                    value: movie.valueToOrderBy,
                    text: movie.label,
                }
            });
    }

    render() {
        return (
            <div>

                {this.props.topMovies && <MovieList movies={this.props.topMovies}
                    handleSelect={this.handleSelect.bind(this)}
                    handleClick={this.handleClick.bind(this)}
                    getOptions={this.getOptions.bind(this)}
                    selectedMovie={this.state.selectedMovie}
                    movieList={this.state.movieList}
                    keyOfmovie={this.state.keyOfmovie}
                />
                }

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        topMovies: state.topMovies,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieList: () => dispatch({ type: 'SHOW_MOVIES' })
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieContainer);
