import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { NowPlayingActionTypes } from "../../constants/ActionConstants";

import TMDbService from "../../services/service";
import {
  fetchNowPlayingMoviesFailure,
  fetchNowPlayingMoviesSuccess,
} from "./actions";

const API = new TMDbService();

function* saveNowPlayingMovies(page = 1, shouldConcat = false): any {
  try {
    const nowPlayingMovies = yield call(API.getNowPlayingMovies, page);
    yield put(
      fetchNowPlayingMoviesSuccess({
        movies: nowPlayingMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchNowPlayingMoviesFailure());
  }
}

function* fetchNowPlayingMoviesSaga(action: {type: string, payload?: any}) {
  yield saveNowPlayingMovies(1, false);
}

function* fetchNowPlayingMoviesWithPageSaga(action: {type: string, payload?: any}) {
  const page = action.payload;

  yield saveNowPlayingMovies(page, true);
}

export default function* nowPlayingSaga() {
  yield all([
    debounce(
      150,
      NowPlayingActionTypes.SET_NOW_PLAYING_SEARCH_PAGE,
      fetchNowPlayingMoviesWithPageSaga
    ),
    takeLatest(
      NowPlayingActionTypes.GET_NOW_PLAYING_MOVIES,
      fetchNowPlayingMoviesSaga
    ),
  ]);
}
