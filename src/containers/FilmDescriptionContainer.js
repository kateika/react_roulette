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
    loadMovieInfo: (id, type) =>{
      return dispatch(fetchInfo(id, type))
    }
  }
};

const FilmDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmDescription);

export function fetchInfo(id,type) {
  if(type == "movie") {
    return fetchMovieInfo(id, type);
  } else {
    return fetchTVShowInfo(id, type);
  }
};

export default FilmDescriptionContainer;