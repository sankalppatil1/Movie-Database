import { MovieDetailsActionTypes } from "../../constants/ActionConstants";
import { IMovieDetails } from "../../models/model";

export function fetchMovieDetailsStart(payload: number) {
  return {
    type: MovieDetailsActionTypes.GET_MOVIE_DETAILS_START,
    payload,
  };
}

export function fetchMovieDetailsSuccess(payload: IMovieDetails) {
  return {
    type: MovieDetailsActionTypes.GET_MOVIE_DETAILS_SUCCESS,
    payload,
  };
}

export function fetchMovieDetailsFailure() {
  return {
    type: MovieDetailsActionTypes.GET_MOVIE_DETAILS_FAILURE,
  };
}

export function clearMovieDetails() {
  return {
    type: MovieDetailsActionTypes.CLEAR_MOVIE_DETAILS,
  };
}
