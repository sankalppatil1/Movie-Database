import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { PopularMoviesActionTypes } from "../../constants/ActionConstants";

import TMDbService from "../../services/service";
import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
} from "./actions";

const API = new TMDbService();

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

function* fetchPopularMoviesSaga(action: {type: string, payload?: any}) {
  yield savePopularMovies(1, false);
}

function* fetchPopularMoviesWithPageSaga(action: {type: string, payload?: any}) {
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
