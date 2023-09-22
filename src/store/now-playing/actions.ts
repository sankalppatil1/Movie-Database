import { NowPlayingActionTypes } from '../../constants/ActionConstants';
import { IMovie, ISearch } from '../../models/model';



export function fetchNowPlayingMoviesStart() {
  return {
    type: NowPlayingActionTypes.GET_NOW_PLAYING_MOVIES,
  };
}

export function fetchNowPlayingMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
  return {
    type: NowPlayingActionTypes.NOW_PLAYING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchNowPlayingMoviesFailure() {
  return {
    type: NowPlayingActionTypes.NOW_PLAYING_MOVIES_FAILED,
  };
}

export function clearNowPlayingSearchPage() {
  return {
    type: NowPlayingActionTypes.SET_NOW_PLAYING_SEARCH_PAGE,
    payload: 1
  };
}

export function setNowPlayingSearchPage(payload: number) {
  return {
    type: NowPlayingActionTypes.SET_NOW_PLAYING_SEARCH_PAGE,
    payload,
  };
}
