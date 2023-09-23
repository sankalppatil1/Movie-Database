import { IMovie, ISearch } from "../models/model";

export const API_IMAGE_PATH = " https://image.tmdb.org/t/p/original";
export default class ApiService {
  private readonly API_BASE = "https://api.themoviedb.org/3/";
  private readonly API_KEY = "0e7274f05c36db12cbe71d9ab0393d47";

  private fetchJSON = async (url: string) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  public getNowPlayingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/now_playing?api_key=${this.API_KEY}&page=${page}`
    );
  };
  public getPopularMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/popular?api_key=${this.API_KEY}&page=${page}`
    );
  };
  public getTopRatedMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/top_rated?api_key=${this.API_KEY}&page=${page}`
    );
  };
  public getUpcomingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}movie/upcoming?api_key=${this.API_KEY}&page=${page}`
    );
  };

  public getGenreList= async (page = 1): Promise<ISearch<IMovie>> => {
    return this.fetchJSON(
      `${this.API_BASE}genre/movie/list?api_key=${this.API_KEY}`
    );
  };
}
