import { connect } from 'react-redux';
import { ListResult } from '../components/ListResult';
import { SortBy } from '../actions/index';
import { fetchMovies } from '../actions/index';
import { change } from 'redux-form';

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

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSearch: (searchQuery) => {
      dispatch(fetchMovies(searchQuery));
    },
    updateSearchValue: (value) => {
      dispatch(change('search', 'searchText', value));
    }
  }
};

let ListResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListResult);

export {mapStateToProps};
export default ListResultContainer;
