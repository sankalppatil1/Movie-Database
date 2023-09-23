import { MovieDetailsActionTypes } from '../../constants/ActionConstants';
import { API_STATES } from '../../constants/AppConstants';
import { ActionType, IMovieDetails } from '../../models/model';

export interface IMovieDetailsState {
  movieDetails: IMovieDetails | null;
  fetchStatus: API_STATES | null;
}

const initialState: IMovieDetailsState = {
  movieDetails: null,
  fetchStatus: null,
};

function reducer(state: IMovieDetailsState = initialState, action: ActionType): IMovieDetailsState {
  switch (action.type) {
    case MovieDetailsActionTypes.GET_MOVIE_DETAILS_START:
      return {
        ...state,
        fetchStatus: API_STATES.LOADING,
      };
    case MovieDetailsActionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        fetchStatus: API_STATES.SUCCESS,
      };
    case MovieDetailsActionTypes.GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        fetchStatus: API_STATES.FAILED,
      };
    case MovieDetailsActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: null,
        fetchStatus: null,
      };
    default:
      return state;
  }
}

export default reducer;
