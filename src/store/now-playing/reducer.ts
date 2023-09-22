import { ActionTypes, IFetchNowPlayingMoviesActions } from './types';
import { API_STATES } from '../../constants/AppConstants';
import { IMovie, ISearch } from '../../models/model';

export interface INowPlayingMoviesState {
  nowPlayingMovies: ISearch<IMovie> | null;
  apiState: API_STATES | null;
  nowPlayingSearchPage: number;
}

const initialState: INowPlayingMoviesState = {
  nowPlayingMovies: null,
  apiState: null,
  nowPlayingSearchPage: 1,
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

      if (shouldConcat && state.nowPlayingMovies) {
        return {
          ...state,
          nowPlayingMovies: {
            ...action.payload.movies,
            results: [...state.nowPlayingMovies.results, ...action.payload.movies.results],
          },
          apiState: API_STATES.SUCCESS,
        };
      }

      return {
        ...state,
        nowPlayingMovies: action.payload.movies,
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
        nowPlayingSearchPage: action.payload,
      };
    case ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE:
      return {
        ...state,
        nowPlayingSearchPage: 1,
      };
    default:
      return state;
  }
}

export default reducer;
