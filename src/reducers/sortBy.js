import { SortBy, SET_SORT_BY} from '../actions/index';

export default function sortBy(state = SortBy.SORT_BY_RELEASE_DATE, action) {
  switch(action.type) {
    case SET_SORT_BY:
      return action.sortBy;
    default:
      return state
  }
};
