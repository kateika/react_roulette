import { connect } from 'react-redux';
import { ListResult } from '../components/ListResult';
import { SortBy } from '../reducers/actions';

const mapStateToProps = (state) => {
  const sortedMovies = state.movies.slice();
  sortedMovies.sort((a,b) => {
    if(state.sortBy === SortBy.SORT_BY_RELEASE_DATE) {
      return parseInt(a.release_date) - parseInt(b.release_date);
    }
    if(state.sortBy === SortBy.SORT_BY_RATING) {
      return parseInt(b.vote_average) - parseInt(a.vote_average);
    }
  });

  return {
    movies: sortedMovies
  }
};

const ListResultContainer = connect(
  mapStateToProps
)(ListResult);

export { ListResultContainer }
