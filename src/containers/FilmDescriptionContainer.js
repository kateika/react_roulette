import { connect } from 'react-redux';
import { FilmDescription } from './FilmDescription';
import { fetchMovieInfo } from '../reducers/actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadMovieInfo: (options) => {
      dispatch(fetchMovieInfo(options));
    }
  }
};

const FilmDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDescription);

export { FilmDescriptionContainer }
