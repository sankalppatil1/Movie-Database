import { ActionTypes, IFetchNowPlayingMoviesActions, INowPlayingMoviesState } from './types';
import { API_STATES } from '../../constants/AppConstants';

const initialState: INowPlayingMoviesState = {
  nowPlayingMovies: null,
  fetchStatus: null,
  nowPlayingSearchPage: 1,
};

function reducer(
  state: INowPlayingMoviesState = initialState,
  action: IFetchNowPlayingMoviesActions
): INowPlayingMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_START:
      return {
        ...state,
        fetchStatus: API_STATES.LOADING,
      };
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.nowPlayingMovies) {
        return {
          ...state,
          nowPlayingMovies: {
            ...action.payload.movies,
            results: [...state.nowPlayingMovies.results, ...action.payload.movies.results],
          },
          fetchStatus: API_STATES.SUCCESS,
        };
      }

      return {
        ...state,
        nowPlayingMovies: action.payload.movies,
        fetchStatus: API_STATES.SUCCESS,
      };
    case ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE:
      return {
        ...state,
        fetchStatus: API_STATES.FAILED,
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
