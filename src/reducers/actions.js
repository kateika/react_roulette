/*
 * action types
 */
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const REQUEST_MOVIES = 'REQUEST_MOVIES'; //for spinner in the future
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_CURRENT_MOVIE = 'RECEIVE_CURRENT_MOVIE';
export const RECEIVE_RELATED_MOVIES = 'RECEIVE_RELATED_MOVIES';
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

export function receiveCurrentMovie(json) {
  return {
    type: RECEIVE_CURRENT_MOVIE,
    currentMovie: json
  }
}

export function receiveRelatedMovies(json) {
  return {
    type: RECEIVE_RELATED_MOVIES,
    relatedMovies: json
  }
}

export function fetchMovies() {
  return function (dispatch, getState) {
    let state = getState();
    dispatch(requestMovies(state.searchText));

    let urlString = "";
    let apiKey = localStorage.getItem('apiKey')
    let urlParams = new URLSearchParams();

    urlParams.append("query", state.searchText);

    if(state.searchBy === SearchBy.SEARCH_BY_DIRECTOR) {
      urlString = "person"
    } else {
      urlString = "movie"
    }

    return fetch(`https://api.themoviedb.org/3/search/${urlString}?api_key=${apiKey}${urlParams.toString().toLowerCase()}`)
      .then(res => isResponseOk(res))
      .then(movies => {
        console.log(movies);
        dispatch(receiveMovies(movies.results));
      })
      .catch(error => console.log("An error occurred: ", error));
  }
}

export function setSearchInput(searchText) {
  return { type: SEARCH_INPUT, searchText}
}

export function fetchMovieInfo(name) {
  return function (dispatch) {
    dispatch(requestMovies(name));//TODO is it necessary?

    let urlParams = new URLSearchParams();
    urlParams.append("title", name);

    //return fetch("https://netflixroulette.net/api/api.php?" + urlParams.toString().toLowerCase())
    //  .then(res => isResponseOk(res))
    //  .then(currentMovie => {
    //    dispatch(receiveCurrentMovie(currentMovie));
    //    let urlParams = new URLSearchParams();
    //    urlParams.append("director", currentMovie.director);
    //    return fetch("https://netflixroulette.net/api/api.php?" + urlParams.toString().toLowerCase())
    //  })
    //  .then(res => isResponseOk(res))
    //  .then(movies => objectToArray(movies))
    //  .then(relatedMovies => {
    //    dispatch(receiveRelatedMovies(relatedMovies));
    //  })
    //  .catch(error => console.log("An error occurred: ", error));
    return fetch("http://localhost:3000/currentMovie.json")
      .then(res => isResponseOk(res))
      .then(currentMovie => {
        dispatch(receiveCurrentMovie(currentMovie));
        let urlParams = new URLSearchParams();
        urlParams.append("director", currentMovie.director);
        return fetch("http://localhost:3000/relatedMovies.json")
      })
      .then(res => isResponseOk(res))
      .then(movies => objectToArray(movies))
      .then(relatedMovies => {
        dispatch(receiveRelatedMovies(relatedMovies));
      })
      .catch(error => console.log("An error occurred: ", error));
  }
}

function isResponseOk(res) {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}
//
//function objectToArray(movies) {
//  if (!movies.isArray)  {
//    movies = [].concat( movies );
//  }
//  return movies;
//}
