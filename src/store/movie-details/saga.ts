import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MovieDetailsActionTypes } from '../../constants/ActionConstants';
import { ActionType } from '../../models/model';
import ApiService from '../../services/service';
import { fetchMovieDetailsFailure, fetchMovieDetailsSuccess } from './actions';

const API = new ApiService();

function* fetchMovieDetailsSaga(action: ActionType): any {
  try {
    const movieDetails = yield call(API.getMovieDetails, action.payload);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsFailure());
  }
}

export function* movieDetailsSaga() {
  yield all([takeLatest(MovieDetailsActionTypes.GET_MOVIE_DETAILS_START, fetchMovieDetailsSaga)]);
}
