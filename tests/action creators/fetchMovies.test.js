import React from "react";
import { fetchMovies } from "../../src/actions/index";

describe("Fetch movies", () => {
  it("fetches movies", async () => {
    const getState = jest.fn(() => { return {searchBy: "SEARCH_BY_MOVIES"} });
    const dispatch = jest.fn();

    const fetchedMovies = {
      results: [{
        poster_path: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 1",
        release_date: "2017-10-06",
        vote_average: 6,
        runtime: 120,
        overview: "Overview 1",
        budget: 120000,
        director: "Quentin Tarantino",
        id: 1,
        type: "movie"
      }, {
        title: "Title 2",
        release_date: "2013-11-03",
        vote_average: 8,
        runtime: 180,
        overview: "Overview 2",
        budget: 220000,
        id: 2,
        type: "movie"
      }]
    };

    const filteredFetchedMovies = {
      results: [{
        poster: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 1",
        release_date: "2017-10-06",
        vote_average: 6,
        runtime: 120,
        overview: "Overview 1",
        budget: 120000,
        director: "Quentin Tarantino",
        id: 1,
        type: "movie"
      }]
    };

    console.log(JSON.stringify(fetchedMovies));
    fetch.mockResponseOnce(JSON.stringify(fetchedMovies));

    await fetchMovies("office")(dispatch, getState);
    expect(dispatch.mock.calls[0][0].movies).toEqual(filteredFetchedMovies.results);
  });

  it("fetches tv shows", async () => {
    const getState = jest.fn(() => { return {searchBy: "SEARCH_BY_TVSHOW"} });
    const dispatch = jest.fn();

    const fetchedMovies = {
      results: [{
        poster_path: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        name: "Title 1",
        first_air_date: "2016-10-06",
        vote_average: 6,
        episode_run_time: [40],
        overview: "Overview 1",
        number_of_seasons: 2,
        last_air_date: "2017-10-06",
        id: 1,
        type: "tv"
      },{
        poster_path: "/wmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        name: "Title 2",
        first_air_date: "2013-05-06",
        vote_average: 8.1,
        episode_run_time: [20],
        overview: "Overview 2",
        number_of_seasons: 2,
        last_air_date: "2016-10-26",
        id: 2,
        type: "tv"
      }]
    };

    const filteredFetchedMovies = {
      results: [{
        poster: "/qmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 1",
        release_date: "2016-10-06",
        vote_average: 6,
        runtime: 40,
        overview: "Overview 1",
        seasons: 2,
        last_air_date: "2017-10-06",
        id: 1,
        type: "tv"
      },{
        poster: "/wmj5xPi1n1fAn5jU4qcAYTaviC1.jpg",
        title: "Title 2",
        release_date: "2013-05-06",
        vote_average: 8.1,
        runtime: 20,
        overview: "Overview 2",
        seasons: 2,
        last_air_date: "2016-10-26",
        id: 2,
        type: "tv"
      }]
    };

    fetch.mockResponseOnce(JSON.stringify(fetchedMovies));

    await fetchMovies("office")(dispatch, getState);
    expect(dispatch.mock.calls[0][0].movies).toEqual(filteredFetchedMovies.results);
  });
});
