import { GenreActionTypes } from "../../constants/ActionConstants";
import { API_STATES } from "../../constants/AppConstants";
import { ActionType, IGenre } from "../../models/model";

export interface IGenresState {
  genres: IGenre[] | null;
  fetchStatus: API_STATES | null;
}

const initialState: IGenresState = {
  genres: null,
  fetchStatus: null,
};

function reducer(state: IGenresState = initialState, action: ActionType): IGenresState {
  switch (action.type) {
    case GenreActionTypes.GET_GENRES_START:
      return {
        ...state,
        fetchStatus: API_STATES.LOADING,
      };
    case GenreActionTypes.GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        fetchStatus: API_STATES.SUCCESS,
      };
    case GenreActionTypes.GET_GENRES_FAILURE:
      return {
        ...state,
        fetchStatus: API_STATES.FAILED,
      };
    default:
      return state;
  }
}

export default reducer;
