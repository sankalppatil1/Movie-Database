import { FavouriteActionTypes } from '../../constants/ActionConstants';
import { ActionType, IMovie } from '../../models/model';

export interface IFavoritesState {
  favoriteMovies: IMovie[];
}

const initialState: IFavoritesState = {
  favoriteMovies: [],
};

function reducer(state: IFavoritesState = initialState, action: ActionType): IFavoritesState {
  switch (action.type) {
    case FavouriteActionTypes.SAVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case FavouriteActionTypes.DELETE_FAVORITE_MOVIE:
      const newFavoriteMovies = [...state.favoriteMovies];
      const movieIndex = newFavoriteMovies.findIndex((movie) => movie.id === action.payload);
      newFavoriteMovies.splice(movieIndex, 1);

      return {
        ...state,
        favoriteMovies: newFavoriteMovies,
      };
    default:
      return state;
  }
}

export default reducer;
