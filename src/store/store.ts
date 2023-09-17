import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import nowPlayingMoviesReducer from './now-playing/reducer';


const sagaMiddleware = createSagaMiddleware()
const rootReducers = combineReducers({
    nowPlayingMovies: nowPlayingMoviesReducer,
});


export const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);


