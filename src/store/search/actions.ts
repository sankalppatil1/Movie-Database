import { SearchActionTypes } from "../../constants/ActionConstants";
import { IMovie, ISearch } from "../../models/model";

export function setSearchQuery(payload: string) {
  return {
    type: SearchActionTypes.SET_SEARCH_QUERY,
    payload,
  };
}

export function setSearchPage(payload: number) {
  return {
    type: SearchActionTypes.SET_SEARCH_PAGE,
    payload,
  };
}

export function clearSearchPage() {
  return {
    type: SearchActionTypes.CLEAR_SEARCH_PAGE,
  };
}

export function fetchSearchContentStart() {
  return {
    type: SearchActionTypes.GET_SEARCH_START,
  };
}

export function fetchSearchContentSuccess(payload: { movies: ISearch<IMovie>; shouldConcat: boolean }) {
  return {
    type: SearchActionTypes.GET_SEARCH_SUCCESS,
    payload,
  };
}

export function fetchSearchContentFailure() {
  return {
    type: SearchActionTypes.GET_SEARCH_FAILURE,
  };
}
