import { IGenre, IMovie } from "../models/model";

export const getFormattedGenreList = (
  idList: number[],
  genreList: IGenre[],
  movieGenre?: IGenre[]
) => {
  let genreListFormatted: string[] = [];
  if (idList) {
    genreList.forEach((genre: IGenre) => {
      if (idList.includes(genre.id)) {
        genreListFormatted.push(genre.name);
      }
    });
  } else {
    movieGenre?.forEach((genre: IGenre) => {
      genreListFormatted.push(genre.name);
    });
  }
  return genreListFormatted.join(", ");
};

export const isFavorite = (favoriteMovies: IMovie[], id: number) => {
  return (
    favoriteMovies &&
    favoriteMovies.findIndex((movie: IMovie) => movie.id === id) !== -1
  );
};

export const getFormattedDate = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } else {
    return "";
  }
};
