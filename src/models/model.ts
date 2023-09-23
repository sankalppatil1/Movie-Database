export interface ISearch<T> {
  page: number;
  results: Array<T>;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
}
export interface IGenre {
  id: number;
  name: string;
}

export interface ActionType {
  type: string;
  payload?: any;
}

export interface IMovieDetails extends IMovie {
  budget: number;
  genres: IGenre[];
  revenue: number;
  status: string;
  tagline: string;
  homepage: string;
}