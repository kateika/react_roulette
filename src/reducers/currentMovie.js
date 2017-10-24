import { RECEIVE_CURRENT_MOVIE } from '../actions/index';

export default function currentMovie(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_MOVIE:
      return action.currentMovie;
    default:
      return state
  }
};
