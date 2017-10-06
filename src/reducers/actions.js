/*
 * action types
 */

export const REQUEST_MOVIES = 'REQUEST_MOVIES'; //for spinner in the future
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';

/*
 * other constants
 */

export const SearchBy= {
  SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
  SEARCH_BY_DIRECTOR: 'SEARCH_BY_DIRECTOR'
};

export const SortBy = {
  SORT_BY_RELEASE_DATE: 'SORT_BY_RELEASE_DATE',
  SORT_BY_RATING: 'SORT_BY_RATING'
};

/*
 * action creators
 */

export function search(text, searchBy) {
  return { type: SEARCH, text, searchBy };
}

export function setSortBy(sortBy) {
  return { type: SET_SORT_BY, sortBy };
}

export function setSearchBy(searchBy) {
  return { type: SET_SEARCH_BY, searchBy };
}

export function requestMovies(text) {
  return { type: REQUEST_MOVIES, text }
}

export function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json
  }
}

export function fetchMovies(text, searchBy) {
  return function (dispatch) {
    dispatch(requestMovies(text));

    let urlParams = new URLSearchParams();
    urlParams.append(searchBy, text);

    return fetch("https://netflixroulette.net/api/api.php?" + urlParams.toString())
      .then(
        res => res.json(),
        err => console.log("An error occured: ", error)
      )
      .then(movies =>
        dispatch(receiveMovies(movies))
      );
  }
}
