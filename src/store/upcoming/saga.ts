import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { UpcomingMoviesActionTypes } from "../../constants/ActionConstants";
import { ActionType } from "../../models/model";

import ApiService from "../../services/service";
import {
  fetchUpcomingMoviesFailure,
  fetchUpcomingMoviesSuccess,
} from "./actions";

const API = new ApiService();

function* saveUpcomingMovies(page = 1, shouldConcat = false): any {
  try {
    const nowPlayingMovies = yield call(API.getUpcomingMovies, page);
    yield put(
      fetchUpcomingMoviesSuccess({
        movies: nowPlayingMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchUpcomingMoviesFailure());
  }
}

function* fetchUpcomingMoviesSaga(action: ActionType) {
  yield saveUpcomingMovies(1, false);
}

function* fetchUpcomingMoviesWithPageSaga(action: ActionType) {
  const page = action.payload;

  yield saveUpcomingMovies(page, true);
}

export function* upcomingMoviesSaga() {
  yield all([
    debounce(
      150,
      UpcomingMoviesActionTypes.SET_UPCOMING_SEARCH_PAGE,
      fetchUpcomingMoviesWithPageSaga
    ),
    takeLatest(
      UpcomingMoviesActionTypes.GET_UPCOMING_MOVIES,
      fetchUpcomingMoviesSaga
    ),
  ]);
}
