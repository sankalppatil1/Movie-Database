import { PopularMoviesActionTypes } from '../../constants/ActionConstants';
import { IMovie, ISearch } from '../../models/model';



export function fetchPopularMoviesStart() {
  return {
    type: PopularMoviesActionTypes.GET_POPULAR_MOVIES,
  };
}

export function fetchPopularMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
  return {
    type: PopularMoviesActionTypes.POPULAR_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchPopularMoviesFailure() {
  return {
    type: PopularMoviesActionTypes.POPULAR_MOVIES_FAILED,
  };
}

export function clearPopularSearchPage() {
  return {
    type: PopularMoviesActionTypes.SET_POPULAR_SEARCH_PAGE,
    payload: 1
  };
}

export function setPopularSearchPage(payload: number) {
  return {
    type: PopularMoviesActionTypes.SET_POPULAR_SEARCH_PAGE,
    payload,
  };
}
