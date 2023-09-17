import { all } from 'redux-saga/effects';

import nowPlayingMoviesSaga from './now-playing/saga';

export default function* rootSaga() {
  yield all([
    nowPlayingMoviesSaga(),
  ]);
}
