import { NowPlayingActionTypes } from '../../constants/ActionConstants';
import { API_STATES } from '../../constants/AppConstants';
import { IMovie, ISearch } from '../../models/model';

export interface INowPlayingMoviesState {
  movies: ISearch<IMovie> | null;
  apiState: API_STATES | null;
  searchPage: number;
}

const initialState: INowPlayingMoviesState = {
  movies: null,
  apiState: null,
  searchPage: 1,
};

function reducer(
  state: INowPlayingMoviesState = initialState,
  action: {type: string, payload?: any}
): INowPlayingMoviesState {
  switch (action.type) {
    case NowPlayingActionTypes.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        apiState: API_STATES.LOADING,
      };
    case NowPlayingActionTypes.NOW_PLAYING_MOVIES_SUCCESS:
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
    case NowPlayingActionTypes.NOW_PLAYING_MOVIES_FAILED:
      return {
        ...state,
        apiState: API_STATES.FAILED,
      };
    case NowPlayingActionTypes.SET_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
