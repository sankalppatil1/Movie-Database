import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GenreActionTypes } from '../../constants/ActionConstants';
import { ActionType } from '../../models/model';
import ApiService from '../../services/service';
import { fetchMovieGenresFailure, fetchMovieGenresSuccess } from './actions';

const API = new ApiService();

function* fetchMovieGenresSaga(action: ActionType): any {
  try {
    const genres = yield call(API.getGenreList);
    yield put(fetchMovieGenresSuccess(genres.genres));
  } catch (error) {
    yield put(fetchMovieGenresFailure());
  }
}

export function* genreSaga() {
  yield all([takeEvery(GenreActionTypes.GET_GENRES_START, fetchMovieGenresSaga)]);
}
