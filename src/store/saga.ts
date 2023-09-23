import { all } from 'redux-saga/effects';
import { genreSaga } from './genres/saga';
import { movieDetailsSaga } from './movie-details/saga';
import { nowPlayingMoviesSaga } from './now-playing/saga';
import { popularMoviesSaga } from './popular/saga';
import { searchSaga } from './search/saga';
import { topRatedMoviesSaga } from './top-rated/saga';
import { upcomingMoviesSaga } from './upcoming/saga';

export default function* rootSaga() {
  yield all([
    nowPlayingMoviesSaga(),
    popularMoviesSaga(),
    topRatedMoviesSaga(),
    upcomingMoviesSaga(),
    genreSaga(),
    searchSaga(),
    movieDetailsSaga()
  ]);
}
