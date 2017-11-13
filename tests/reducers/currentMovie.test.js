import currentMovie from "../../src/reducers/currentMovie";
import { RECEIVE_CURRENT_MOVIE } from "actions";

describe("currentMovie reducer", () => {
  it("should return state for current movie", () => {
    expect(
      currentMovie({}, {
        type: RECEIVE_CURRENT_MOVIE,
        currentMovie: {
          "adult": false,
          "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
          "belongs_to_collection": null,
          "budget": 63000000,
          "genres": [
            {
              "id": 18,
              "name": "Drama"
            }
          ]
        }
      })
    ).toEqual(
      {
        "adult": false,
        "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
        "belongs_to_collection": null,
        "budget": 63000000,
        "genres": [
          {
            "id": 18,
            "name": "Drama"
          }
        ]
      }
    )
  });

  it("should return the initial state", () => {
    expect(
      currentMovie(undefined, {})).toEqual({})
  });
});
