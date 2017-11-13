import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setSearchBy, SearchBy, fetchMovies } from '../actions/index';
import { Search } from '../components/Search';

const mapStateToProps = (state) => {
  return {
    isMoviesActive: state.searchBy === SearchBy.SEARCH_BY_MOVIES,
    isTVShowActive: state.searchBy === SearchBy.SEARCH_BY_TVSHOW
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoviesClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_MOVIES));
    },
    onTVShowsClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_TVSHOW));
    },
    onSubmitSearch: (values) => {
      dispatch(fetchMovies(values.searchText));
    }
  }
};

let SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

SearchContainer = reduxForm({
  form: 'search',
  destroyOnUnmount: false
})(SearchContainer);

export {SearchContainer}
