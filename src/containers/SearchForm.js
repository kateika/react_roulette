import { connect } from 'react-redux'
import { setSearchBy } from '../reducers/actions'
import { Search } from '../components/Search'

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (searchBy) => {
      dispatch(setSearchBy(searchBy));
    }
  }
}

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export { SearchForm }