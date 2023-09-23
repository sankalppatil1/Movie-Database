import { UpcomingMoviesActionTypes } from '../../constants/ActionConstants';
import { IMovie, ISearch } from '../../models/model';



export function fetchUpcomingMoviesStart() {
  return {
    type: UpcomingMoviesActionTypes.GET_UPCOMING_MOVIES,
  };
}

export function fetchUpcomingMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
  return {
    type: UpcomingMoviesActionTypes.UPCOMING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchUpcomingMoviesFailure() {
  return {
    type: UpcomingMoviesActionTypes.UPCOMING_MOVIES_FAILED,
  };
}

export function clearUpcomingSearchPage() {
  return {
    type: UpcomingMoviesActionTypes.SET_UPCOMING_SEARCH_PAGE,
    payload: 1
  };
}

export function setUpcomingSearchPage(payload: number) {
  return {
    type: UpcomingMoviesActionTypes.SET_UPCOMING_SEARCH_PAGE,
    payload,
  };
}
