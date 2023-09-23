import { IGenre, IMovie } from "../models/model";

export const getFormattedGenreList = (
  idList: number[],
  genreList: IGenre[]
) => {
  let genreListFormatted: string[] = [];
  genreList.forEach((genre: IGenre) => {
    if (idList.includes(genre.id)) {
      genreListFormatted.push(genre.name);
    }
  });
  return genreListFormatted.join(", ");
};

export const isFavorite = (favoriteMovies: IMovie[], id: number) => {
  return favoriteMovies && favoriteMovies.findIndex((movie: IMovie) => movie.id === id) !== -1;
};

