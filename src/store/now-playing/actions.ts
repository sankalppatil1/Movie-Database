import { IMovie, ISearch } from '../../models/model';
import { ActionTypes } from './types';


export function fetchNowPlayingMoviesStart() {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
  };
}

export function fetchNowPlayingMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchNowPlayingMoviesFailure() {
  return {
    type: ActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE,
  };
}

export function clearNowPlayingSearchPage() {
  return {
    type: ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE,
  };
}

export function setNowPlayingSearchPage(payload: number) {
  return {
    type: ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE,
    payload,
  };
}
