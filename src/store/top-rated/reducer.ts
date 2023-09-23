import { TopRatedMoviesActionTypes } from '../../constants/ActionConstants';
import { API_STATES } from '../../constants/AppConstants';
import { ActionType, IMovie, ISearch } from '../../models/model';

export interface ITopRatedMoviesState {
  movies: ISearch<IMovie> | null;
  apiState: API_STATES | null;
  searchPage: number;
}

const initialState: ITopRatedMoviesState = {
  movies: null,
  apiState: null,
  searchPage: 1,
};

function reducer(
  state: ITopRatedMoviesState = initialState,
  action: ActionType
): ITopRatedMoviesState {
  switch (action.type) {
    case TopRatedMoviesActionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        apiState: API_STATES.LOADING,
      };
    case TopRatedMoviesActionTypes.TOP_RATED_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.movies) {
        return {
          ...state,
          movies: {
            ...action.payload.movies,
            results: [...state.movies.results, ...action.payload.movies.results],
          },
          apiState: API_STATES.SUCCESS,
        };
      }

      return {
        ...state,
        movies: action.payload.movies,
        apiState: API_STATES.SUCCESS,
      };
    case TopRatedMoviesActionTypes.TOP_RATED_MOVIES_FAILED:
      return {
        ...state,
        apiState: API_STATES.FAILED,
      };
    case TopRatedMoviesActionTypes.SET_TOP_RATED_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
