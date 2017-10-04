import { connect } from 'react-redux';
import { setSearchBy, SearchBy } from '../reducers/actions';
import { Search } from '../components/Search';

const mapStateToProps = (state) => {
  return {
    isTitleActive: state.searchBy === SearchBy.SEARCH_BY_TITLE,
    isDirectorActive: state.searchBy === SearchBy.SEARCH_BY_DIRECTOR
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_TITLE));
    },
    onDirectorClick: () => {
      dispatch(setSearchBy(SearchBy.SEARCH_BY_DIRECTOR));
    }
  }
};

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export { SearchForm }
