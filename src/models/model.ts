export interface ISearch<T> {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: Date;
    minimum: Date;
  };
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IImages {
  id: number;
  backdrops: IImage[];
  posters: IImage[];
}

export interface IImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ActionType {
  type: string;
  payload?: any;
}