import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { TopRatedMoviesActionTypes } from "../../constants/ActionConstants";
import { ActionType } from "../../models/model";

import ApiService from "../../services/service";
import {
  fetchTopRatedMoviesFailure,
  fetchTopRatedMoviesSuccess,
} from "./actions";

const API = new ApiService();

function* saveTopRatedMovies(page = 1, shouldConcat = false): any {
  try {
    const topRatedMovies = yield call(API.getTopRatedMovies, page);
    yield put(
      fetchTopRatedMoviesSuccess({
        movies: topRatedMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchTopRatedMoviesFailure());
  }
}

function* fetchTopRatedMoviesSaga(action: ActionType) {
  yield saveTopRatedMovies(1, false);
}

function* fetchTopRatedMoviesWithPageSaga(action: ActionType) {
  const page = action.payload;

  yield saveTopRatedMovies(page, true);
}

export function* topRatedMoviesSaga() {
  yield all([
    debounce(
      150,
      TopRatedMoviesActionTypes.SET_TOP_RATED_SEARCH_PAGE,
      fetchTopRatedMoviesWithPageSaga
    ),
    takeLatest(
      TopRatedMoviesActionTypes.GET_TOP_RATED_MOVIES,
      fetchTopRatedMoviesSaga
    ),
  ]);
}
