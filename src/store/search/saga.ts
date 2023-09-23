import {
  all,
  call,
  put,
  debounce,
  select,
  takeLatest,
} from "redux-saga/effects";

import {
  clearSearchPage,
  fetchSearchContentFailure,
  fetchSearchContentStart,
  fetchSearchContentSuccess,
} from "./actions";
import ApiService from "../../services/service";
import { ActionType } from "../../models/model";
import { SearchActionTypes } from "../../constants/ActionConstants";
import { IMainState } from "../store";

const API = new ApiService();

function* saveMovies(query: string, page = 1, shouldConcat = false): any {
  const currentPage = yield select(
    (state: IMainState) => state.search.searchQuery
  );

  yield put(fetchSearchContentStart());
  try {
    const searchResult = yield call(API.getContentBySearchQuery, query, page);
    yield put(
      fetchSearchContentSuccess({ movies: searchResult, shouldConcat })
    );

    if (currentPage !== 1 && !shouldConcat) {
      yield put(clearSearchPage());
    }
  } catch (error) {
    yield put(fetchSearchContentFailure());
  }
}

function* searchQuerySaga(action: ActionType) {
  const query = action.payload;

  yield saveMovies(query, 1, false);
}

function* searchQueryWithPageSaga(action: ActionType): any {
  const query = yield select((state: IMainState) => state.search.searchQuery);
  const page = action.payload;

  yield saveMovies(query, page, true);
}

export function* searchSaga() {
  yield all([
    debounce(300, SearchActionTypes.SET_SEARCH_QUERY, searchQuerySaga),
    takeLatest(SearchActionTypes.SET_SEARCH_PAGE, searchQueryWithPageSaga),
  ]);
}
