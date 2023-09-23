import { IGenre } from "../models/model";

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
  return genreListFormatted.join(', ');
};
