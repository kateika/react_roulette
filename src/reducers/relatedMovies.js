import { RECEIVE_RELATED_MOVIES } from './actions';

export default function relatedMovies(state = [], action) {
  switch(action.type) {
    case RECEIVE_RELATED_MOVIES:
      return action.relatedMovies;
    default:
      return state
  }
};
