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

export function receiveMovies(text, json) {
  console.log("json from receiveMovies", json);
  return {
    type: RECEIVE_MOVIES,
    movies: [{
      'title': 'How to train a dragon',
      'poster': 'http://static.rogerebert.com/uploads/movie/movie_poster/how-to-train-your-dragon-2010/large_zMAm3WYmvD40FaWFsOmpicQFabz.jpg',
      'release_year': '2014',
      'category': 'Cartoon',
      'rating': '4.8'
    },
      {
        'title': 'Lilo and Stitch',
        'poster': 'https://images-na.ssl-images-amazon.com/images/I/51wi%2BQtyubL._SY450_.jpg',
        'release_year': '2002',
        'category': 'Cartoon',
        'rating': '4.3'
      }]
  }
}

//let smth = {
//  searchBy: SearchBy.SEARCH_BY_DIRECTOR,
//  movies: [
//      {
//        title: "smth",
//        year: "2017",
//        poster: "url.png",
//        category: "adventures",
//        key: 1
//      },
//      {
//        title: "smth2",
//        year: "2013",
//        poster: "url2.png",
//        category: "comedy",
//        key: 2
//      }
//    ]
//};

export function fetchMovies(text, searchBy) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
console.log("text", text);
  console.log("searchBy", searchBy);
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestMovies(text));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

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
