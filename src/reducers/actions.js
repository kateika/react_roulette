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
  SEARCH_BY_MOVIES: 'SEARCH_BY_MOVIES',
  SEARCH_BY_TVSHOW: 'SEARCH_BY_TVSHOW'
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
    dispatch(requestMovies(state.searchText));//TODO is it necessary?

    let urlString = "";
    let urlParams = new URLSearchParams();

    urlParams.append("query", state.searchText);

    if(state.searchBy === SearchBy.SEARCH_BY_MOVIES) {
      urlString = "movie"
    } else {
      urlString = "tv"
    }

    return fetch(`https://api.themoviedb.org/3/search/${urlString}?api_key=${apiKey}&${urlParams.toString().toLowerCase()}`)
      .then(isResponseOk)
      .then(fetchedMovies => {
        let converter = state.searchBy === SearchBy.SEARCH_BY_MOVIES ? convertToMovie : convertToTVShow;
        let movies = fetchedMovies.results.map(function(movie) {
          return converter(movie);
        });
        let filteredMoviesWIthoutPoster = movies.filter(function(movie) {
          return movie.poster;
        });
        dispatch(receiveMovies(filteredMoviesWIthoutPoster));
      })
      .catch(error => console.error("An error occurred: ", error));
  }
}

export function setSearchInput(searchText) {
  return { type: SEARCH_INPUT, searchText}
}

export function fetchMovieInfo(id,type) {
  let currentMovie = {};
  return function (dispatch) {
    dispatch(requestMovies(id));//TODO is it necessary?

    let urlString = type;

    return fetch(`http://api.themoviedb.org/3/${urlString}/${id}?api_key=${apiKey}`)
      .then(isResponseOk)
      .then(fetchedMovie => {
        let converter = type === "movie" ? convertToMovie : convertToTVShow;
        currentMovie = converter(fetchedMovie);
        return fetch(`https://api.themoviedb.org/3/${urlString}/${id}/credits?api_key=${apiKey}`)
      })
      .then(isResponseOk)
      .then(movie => {
        if(type === "movie") {
          let director = movie.crew.filter(function(person) {
            return person.job == "Director";
          });
          if(director.length > 0) {
            currentMovie.director = director[0].name;
            dispatch(receiveCurrentMovie(currentMovie));
            return fetch(`https://api.themoviedb.org/3/person/${director[0].id}/credits?api_key=${apiKey}`)
          } else {
            dispatch(receiveCurrentMovie(currentMovie));
            return fetch(`https://api.themoviedb.org/3/movie/${currentMovie.id}/recommendations?api_key=${apiKey}`)
          }
        } else {
          dispatch(receiveCurrentMovie(currentMovie));
          return fetch(`https://api.themoviedb.org/3/tv/${currentMovie.id}/recommendations?api_key=${apiKey}`)
        }
      })
      .then(isResponseOk)
      .then(relatedMovies => {
        let converter = type === "movie" ? convertToMovie : convertToTVShow;
        let movies = [];
        if(type === "movie") {
          let directorMovies = relatedMovies.crew.filter(function (person) {
            return person.job == "Director";
          });
          movies = directorMovies.map(function(movie) {
            let movieforShow = {
              poster: movie.poster_path,
              title: movie.title,
              release_date: movie.release_date,
              director: movie.director,
              id: movie.id,
              type: "movie"
            };
            return movieforShow;
          });
        } else {
          movies = relatedMovies.results.map(function(movie) {
            return converter(movie);
          });
        }
        let filteredMoviesWIthoutPoster = movies.filter(function(movie) {
          return movie.poster;
        });
        dispatch(receiveRelatedMovies(filteredMoviesWIthoutPoster));
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


function convertToMovie(movie) {
  return {
    poster: movie.poster_path,
    title: movie.title,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    runtime: movie.runtime,
    overview: movie.overview,
    budget: movie.budget,
    id: movie.id,
    type: "movie"
  }
}

function convertToTVShow(movie) {
  return {
    poster: movie.poster_path,
    title: movie.name,
    release_date: movie.first_air_date,
    vote_average: movie.vote_average,
    runtime: movie.episode_run_time ? movie.episode_run_time[0] : null,
    overview: movie.overview,
    seasons: movie.number_of_seasons,
    last_air_date: movie.last_air_date,
    id: movie.id,
    type: "tv"
  }
}
