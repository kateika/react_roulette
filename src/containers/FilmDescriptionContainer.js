import { connect } from 'react-redux';
import { FilmDescription } from './../components/FilmDescription';
import { fetchMovieInfo } from '../reducers/actions';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    currentMovie: state.currentMovie,
    relatedMovies: state.relatedMovies
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadMovieInfo: (id, type) => {
      dispatch(fetchMovieInfo(id, type));
    }
  }
};

const FilmDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDescription);

export { FilmDescriptionContainer }
