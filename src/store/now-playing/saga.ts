import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import {
  ActionTypes,
  IFetchNowPlayingMoviesStartAction,
  ISetNowPlayingSearchPage,
} from "./types";
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

function* fetchNowPlayingMoviesSaga(action: IFetchNowPlayingMoviesStartAction) {
  yield saveNowPlayingMovies(1, false);
}

function* fetchNowPlayingMoviesWithPageSaga(action: ISetNowPlayingSearchPage) {
  const page = action.payload;

  yield saveNowPlayingMovies(page, true);
}

export default function* nowPlayingSaga() {
  yield all([
    debounce(
      150,
      ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE,
      fetchNowPlayingMoviesWithPageSaga
    ),
    takeLatest(
      ActionTypes.GET_NOW_PLAYING_MOVIES,
      fetchNowPlayingMoviesSaga
    ),
  ]);
}
