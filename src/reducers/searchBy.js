import { SearchBy, SET_SEARCH_BY } from '../actions/index';

export default function searchBy(state = SearchBy.SEARCH_BY_MOVIES, action) {
  switch(action.type) {
    case SET_SEARCH_BY:
      return action.searchBy;
    default:
      return state
  }
};
