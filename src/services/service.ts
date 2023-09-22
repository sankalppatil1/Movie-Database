import {IMovie, ISearch } from "../models/model";

export const API_IMAGE_PATH = ' https://image.tmdb.org/t/p/original';
export default class TMDb {
  private readonly API_BASE = 'https://api.themoviedb.org/3/';
  private readonly TMDB_API_KEY = '0e7274f05c36db12cbe71d9ab0393d47';
  private readonly API_LANGUAGE = 'en-US';

  private fetchJSON = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status} error`);
    }

    return response.json();
  };

  public getNowPlayingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/now_playing?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  // public getMovieImages = async (imageId: string): Promise<IImages> => {
  //   return this.fetchJSON(`${this.API_IMAGE_PATH}/${imageId}`);
  // };
}
