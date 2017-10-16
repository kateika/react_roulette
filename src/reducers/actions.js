let apiKey = localStorage.getItem('apiKey');
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
    let urlParams = new URLSearchParams();

    urlParams.append("query", state.searchText);

    if(state.searchBy === SearchBy.SEARCH_BY_DIRECTOR) {
      urlString = "person"
    } else {
      urlString = "movie"
    }

    return fetch(`https://api.themoviedb.org/3/search/${urlString}?api_key=${apiKey}&${urlParams.toString().toLowerCase()}`)
      .then(isResponseOk)
      .then(movies => {
        dispatch(receiveMovies(movies.results));
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}

export function setSearchInput(searchText) {
  return { type: SEARCH_INPUT, searchText}
}

export function fetchMovieInfo(id) {
  let movie = {};
  return function (dispatch) {
    dispatch(requestMovies(id));//TODO is it necessary?
    return fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(isResponseOk)
      .then(currentMovie => {
        movie = currentMovie;
        return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
      })
      .then(isResponseOk)
      .then(currentMovie => {
        let director = currentMovie.crew.filter(function(item) {
          return item.job == "Director";
        });
        movie.director = director[0].name;
        dispatch(receiveCurrentMovie(movie));
        return fetch(`https://api.themoviedb.org/3/person/${director[0].id}/credits?api_key=${apiKey}`)
      })
      .then(isResponseOk)
      .then(directorMovies => {
        let relatedMovies = directorMovies.crew.filter(function(person) {
          return person.job == "Director";
        });
        dispatch(receiveRelatedMovies(relatedMovies));
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}

function isResponseOk(res) {
  if(!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}
