import { Action } from 'redux';
import { IMovie, ISearch } from '../../models/model';
import { INowPlayingMoviesState } from './reducer';

export enum ActionTypes {
  GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES',
  NOW_PLAYING_MOVIES_SUCCESS = 'NOW_PLAYING_MOVIES_SUCCESS',
  NOW_PLAYING_MOVIES_FAILED = 'NOW_PLAYING_MOVIES_FAILED',

  SET_NOW_PLAYING_SEARCH_PAGE = '[movie] set now playing search page',
  CLEAR_NOW_PLAYING_SEARCH_PAGE = '[movie] clear now playing search page',
}

export interface IFetchNowPlayingMoviesStartAction extends Action {
  type: ActionTypes.GET_NOW_PLAYING_MOVIES;
}

export interface IFetchNowPlayingMoviesSuccessAction extends Action {
  type: ActionTypes.NOW_PLAYING_MOVIES_SUCCESS;
  payload: {
    movies: ISearch<IMovie>;
    shouldConcat?: boolean;
  };
}

export interface IFetchNowPlayingMoviesFailureAction extends Action {
  type: ActionTypes.NOW_PLAYING_MOVIES_FAILED;
}

export interface IClearNowPlayingSearchPage extends Action {
  type: ActionTypes.CLEAR_NOW_PLAYING_SEARCH_PAGE;
}

export interface ISetNowPlayingSearchPage extends Action {
  type: ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE;
  payload: INowPlayingMoviesState['searchPage'];
}

export type IFetchNowPlayingMoviesActions =
  | IFetchNowPlayingMoviesStartAction
  | IFetchNowPlayingMoviesSuccessAction
  | IFetchNowPlayingMoviesFailureAction
  | IClearNowPlayingSearchPage
  | ISetNowPlayingSearchPage;
