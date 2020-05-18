import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

const MovieContainer = (props) => {

    useEffect(() => {
        props.fetchMovieList();
    }, []);

    const [movieState, setState] = useState({
        topMovies: null,
        movieList: null,
        keyOfmovie: null,
        selectedMovie: null,
    });

    const handleClick = (movie, key) => {
        setState({
            ...movieState,
            selectedMovie: movie,
            keyOfmovie: key
        });

    };
    const handleSelect = (e, value) => {
        if (value === 'rank') {
            const sortedMovieByRank = movieState.movieList.sort((a, b) => a.rank - b.rank);
            setState({
                ...movieState,
                movieList: sortedMovieByRank, keyOfmovie: null
            });
        } else if (value === 'releaseDate') {
            const sortedMovieByDate = movieState.movieList.sort((a, b) => a.releaseDate - b.releaseDate);
            setState({
                ...movieState,
                movieList: sortedMovieByDate, keyOfmovie: null
            });
        }
    };

    const getOptions = (topMovies) => {
        const orderSelect = topMovies.components
            .filter((movie) => { return movie.type === 'order-select' });

        !movieState.topMovies && setState({
            ...movieState,
            topMovies: topMovies,
            movieList: topMovies.components
                .filter((movie) => { return movie.type === 'movie-list' }).map((m) => { return m.items })[0],
        });

        return orderSelect[0].items
            .map((movie) => {
                return {
                    key: movie.label,
                    value: movie.valueToOrderBy,
                    text: movie.label,
                }
            });
    };

    return (
        <div>

            {props.topMovies && <MovieList movies={props.topMovies}
                handleSelect={handleSelect}
                handleClick={handleClick}
                getOptions={getOptions}
                selectedMovie={movieState.selectedMovie}
                movieList={movieState.movieList}
                keyOfmovie={movieState.keyOfmovie}
            />
            }

        </div>
    );

};

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
