import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setSearchBy, SearchBy, fetchMovies, setSearchInput } from '../reducers/actions';
import { Search } from '../components/Search';

const mapStateToProps = (state) => {
  return {
    isMoviesActive: state.searchBy === SearchBy.SEARCH_BY_MOVIES,
    isTVShowActive: state.searchBy === SearchBy.SEARCH_BY_TVSHOW,
    searchText: state.searchText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoviesClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_MOVIES));
    },
    onDirectorClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_TVSHOW));
    },
    onSubmitSearch: (e) => {
      e.preventDefault();
      dispatch(fetchMovies());
    },
    onSearchChange: (e) => {
      dispatch(setSearchInput(e.target.value));
    }
  }
};

let SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

SearchForm = reduxForm({
  form: 'search'
})(SearchForm);

export {SearchForm}
