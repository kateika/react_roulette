import { connect } from 'react-redux';
import { FilmDescription } from './../components/FilmDescription';
import { fetchMovieInfo, fetchTVShowInfo } from '../actions/index';

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
      if(type == "movie") {
        dispatch(fetchMovieInfo(id, type));
      } else {
        dispatch(fetchTVShowInfo(id, type));
      }
    }
  }
};

const FilmDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDescription);

export default FilmDescriptionContainer;
