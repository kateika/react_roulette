import { connect } from 'react-redux';
import { ListResult } from '../components/ListResult';
import { SortBy } from '../reducers/actions';

const mapStateToProps = (state) => {
  const sortedMovies = state.movies.slice();
  sortedMovies.sort((a,b) => {
    if(state.sortBy === SortBy.SORT_BY_RELEASE_DATE) {
      return parseInt(a.release_year) - parseInt(b.release_year);
    }
    if(state.sortBy === SortBy.SORT_BY_RATING) {
      return parseInt(b.rating) - parseInt(a.rating);
    }
  });
  //console.log(sortedMovies);
  return {
    movies: sortedMovies
  }
};

const ListResultContainer = connect(
  mapStateToProps
)(ListResult);

export { ListResultContainer }
