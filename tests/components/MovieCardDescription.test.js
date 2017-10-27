import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { MovieCardDescription } from "../../src/components/MovieCardDescription";

const movie = {
  title: "test title",
  release_date: "1976-06-17",
  poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
  id: 111,
  type: "movie",
  vote_average: 6.8,
  runtime: 120,
  overview: "Some overview",
  budget: 100,
  seasons: 2,
  last_air_date: "2976-06-17"
};

test("renders valid layout when we receive all props", () => {
  const tree = ReactTestRenderer.create(
    <MovieCardDescription currentMovie={movie} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

const movieWithoutSomeProps = {
  title: "test title",
  poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
  id: 111,
  type: "movie",
  overview: "Some overview"
};

test("renders layout without vote_average, release_date, runtime, budget, seasons, last_air_date ", () => {
  const tree = ReactTestRenderer.create(
    <MovieCardDescription currentMovie={movieWithoutSomeProps} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
