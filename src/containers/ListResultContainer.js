import { connect } from 'react-redux';
import { requestMovies, receiveMovies, fetchMovies } from '../reducers/actions';
import { ListResult } from './ListResult';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBodyClick: () => {
      dispatch(fetchMovies("Quentin Tarantino", "director"));
    }
  }
};

const ListResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListResult);

export { ListResultContainer }
