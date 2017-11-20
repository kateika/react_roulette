import { RECEIVE_MOVIES } from '../actions/index';

export default function movies(state = [], action) {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    default:
      return state
  }
};
