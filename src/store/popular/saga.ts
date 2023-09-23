import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { PopularMoviesActionTypes } from "../../constants/ActionConstants";
import { ActionType } from "../../models/model";

import ApiService from "../../services/service";
import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
} from "./actions";

const API = new ApiService();

function* savePopularMovies(page = 1, shouldConcat = false): any {
  try {
    const nowPlayingMovies = yield call(API.getPopularMovies, page);
    yield put(
      fetchPopularMoviesSuccess({
        movies: nowPlayingMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchPopularMoviesFailure());
  }
}

function* fetchPopularMoviesSaga(action: ActionType) {
  yield savePopularMovies(1, false);
}

function* fetchPopularMoviesWithPageSaga(action: ActionType) {
  const page = action.payload;

  yield savePopularMovies(page, true);
}

export function* popularMoviesSaga() {
  yield all([
    debounce(
      150,
      PopularMoviesActionTypes.SET_POPULAR_SEARCH_PAGE,
      fetchPopularMoviesWithPageSaga
    ),
    takeLatest(
      PopularMoviesActionTypes.GET_POPULAR_MOVIES,
      fetchPopularMoviesSaga
    ),
  ]);
}
