import { connect } from 'react-redux';
import Movie from '../components/Movie';
export const mapStateToProps = state => {
    return {
        ...state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieList: () => dispatch({type: 'SHOW_MOVIES'})
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(Movie);
