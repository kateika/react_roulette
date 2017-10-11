import { connect } from 'react-redux';
import { ListResult } from '../components/ListResult';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const ListResultContainer = connect(
  mapStateToProps
)(ListResult);

export { ListResultContainer }
