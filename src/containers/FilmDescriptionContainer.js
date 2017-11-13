import { connect } from 'react-redux';
import { FilmDescription } from './../components/FilmDescription';
import { fetchInfo } from '../actions/index';

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


export default FilmDescriptionContainer;
