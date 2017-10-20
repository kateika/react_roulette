import { SEARCH_INPUT } from './actions';

export default function searchText(state = '', action) {
  switch(action.type) {
    case SEARCH_INPUT:
      return action.searchText;
    default:
      return state
  }
};
