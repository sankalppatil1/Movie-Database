import { all } from 'redux-saga/effects';
import { genreSaga } from './genres/saga';
import { nowPlayingMoviesSaga } from './now-playing/saga';
import { popularMoviesSaga } from './popular/saga';
import { topRatedMoviesSaga } from './top-rated/saga';
import { upcomingMoviesSaga } from './upcoming/saga';

export default function* rootSaga() {
  yield all([
    nowPlayingMoviesSaga(),
    popularMoviesSaga(),
    topRatedMoviesSaga(),
    upcomingMoviesSaga(),
    genreSaga(),
  ]);
}
