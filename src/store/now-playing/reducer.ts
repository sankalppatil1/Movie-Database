import { ActionTypes, IFetchNowPlayingMoviesActions } from './types';
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
  action: IFetchNowPlayingMoviesActions
): INowPlayingMoviesState {
  switch (action.type) {
    case ActionTypes.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        apiState: API_STATES.LOADING,
      };
    case ActionTypes.NOW_PLAYING_MOVIES_SUCCESS:
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
    case ActionTypes.NOW_PLAYING_MOVIES_FAILED:
      return {
        ...state,
        apiState: API_STATES.FAILED,
      };
    case ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    case ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        searchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
