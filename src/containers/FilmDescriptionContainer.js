import { connect } from 'react-redux';
import { FilmDescription } from './FilmDescription';
import { fetchMovieInfo } from '../reducers/actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    currentMovie: state.currentMovie
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadMovieInfo: (name) => {
      dispatch(fetchMovieInfo(name));
    }
  }
};

const FilmDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDescription);

export { FilmDescriptionContainer }
