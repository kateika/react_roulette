import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import searchBy from './searchBy';
import sortBy from './sortBy';
import movies from './movies';
import currentMovie from './currentMovie';
import relatedMovies from './relatedMovies';

let rootReducer = combineReducers({
    searchBy,
    sortBy,
    movies,
    currentMovie,
    relatedMovies,
    form: formReducer
  });

  export default rootReducer;