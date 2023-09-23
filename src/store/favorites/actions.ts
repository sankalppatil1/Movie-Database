import { FavouriteActionTypes } from "../../constants/ActionConstants";
import { IMovie } from "../../models/model";

export function saveFavoriteMovie(payload: IMovie) {
  return {
    type: FavouriteActionTypes.SAVE_FAVORITE_MOVIE,
    payload,
  };
}

export function deleteFavoriteMovie(payload: number) {
  return {
    type: FavouriteActionTypes.DELETE_FAVORITE_MOVIE,
    payload,
  };
}
