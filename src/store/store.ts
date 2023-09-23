import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import nowPlayingMoviesReducer, { INowPlayingMoviesState } from './now-playing/reducer';
import popularMoviesReducer, { IPopularMoviesState } from './popular/reducer';
import topRatedMoviesReducer, { ITopRatedMoviesState } from './top-rated/reducer';
import upcomingMoviesReducer, { IUpcomingMoviesState } from './upcoming/reducer';


const sagaMiddleware = createSagaMiddleware()
const rootReducers = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
});

export interface IMainState {
    nowPlayingMovies: INowPlayingMoviesState
    popularMovies: IPopularMoviesState
    topRatedMovies: ITopRatedMoviesState,
    upcomingMovies: IUpcomingMoviesState,
}



export const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);


