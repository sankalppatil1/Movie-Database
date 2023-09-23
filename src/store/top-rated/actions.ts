import { TopRatedMoviesActionTypes } from '../../constants/ActionConstants';
import { IMovie, ISearch } from '../../models/model';



export function fetchTopRatedMoviesStart() {
  return {
    type: TopRatedMoviesActionTypes.GET_TOP_RATED_MOVIES,
  };
}

export function fetchTopRatedMoviesSuccess(payload: { movies: ISearch<IMovie>; shouldConcat?: boolean }) {
  return {
    type: TopRatedMoviesActionTypes.TOP_RATED_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchTopRatedMoviesFailure() {
  return {
    type: TopRatedMoviesActionTypes.TOP_RATED_MOVIES_FAILED,
  };
}

export function clearTopRatedSearchPage() {
  return {
    type: TopRatedMoviesActionTypes.SET_TOP_RATED_SEARCH_PAGE,
    payload: 1
  };
}

export function setTopRatedSearchPage(payload: number) {
  return {
    type: TopRatedMoviesActionTypes.SET_TOP_RATED_SEARCH_PAGE,
    payload,
  };
}
