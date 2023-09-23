import { GenreActionTypes } from "../../constants/ActionConstants";
import { IGenresState } from "./reducer";

export function fetchMovieGenresStart() {
  return {
    type: GenreActionTypes.GET_GENRES_START,
  };
}

export function fetchMovieGenresSuccess(payload: IGenresState) {
  return {
    type: GenreActionTypes.GET_GENRES_SUCCESS,
    payload,
  };
}

export function fetchMovieGenresFailure() {
  return {
    type: GenreActionTypes.GET_GENRES_FAILURE,
  };
}
