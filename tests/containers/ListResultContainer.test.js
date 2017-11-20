import React from "react";
import { mapStateToProps } from "../../src/containers/ListResultContainer";

describe("List result container", () => {
  it("sort movies by date", () => {
    const stateForDateSorting = {
      movies: [{
        release_date: "2017-07-11",
        vote_average: 6.8
      },
      {
        release_date: "1976-06-17",
        vote_average: 7.0
      },
      {
        release_date: "1969-12-12",
        vote_average: 5.8
      }],
      sortBy: "SORT_BY_RELEASE_DATE"
    };

    const sortedMovies = {
      movies: [{
        release_date: "1969-12-12",
        vote_average: 5.8
      },
      {
        release_date: "1976-06-17",
        vote_average: 7.0
      },
       {
        release_date: "2017-07-11",
        vote_average: 6.8
      }]
    };

    expect(mapStateToProps(stateForDateSorting)).toEqual(sortedMovies)
  });

  it("sort movies by rating", () => {
    const stateForRating = {
      movies: [{
        release_date: "2017-07-11",
        vote_average: 6.8
      },
      {
        release_date: "1976-06-17",
        vote_average: 7.0
      },
      {
        release_date: "1969-12-12",
        vote_average: 5.8
      }],
      sortBy: "SORT_BY_RATING"
    };

    const sortedMovies = {
      movies: [{
        release_date: "1976-06-17",
        vote_average: 7.0
      },
      {
        release_date: "2017-07-11",
        vote_average: 6.8
      },
      {
        release_date: "1969-12-12",
        vote_average: 5.8
      }]
    };
    
    expect(mapStateToProps(stateForRating)).toEqual(sortedMovies)
  });
});
