import { Box, IconButton, Theme, useTheme } from "@mui/material";
import React, { BaseSyntheticEvent } from "react";
import { IGenre, IMovie } from "../../../models/model";
import { API_IMAGE_PATH } from "../../../services/service";

import { useDispatch, useSelector } from "react-redux";
import { IMainState } from "../../../store/store";
import { getFormattedGenreList, isFavorite } from "../../../Utility/Utilities";
import MovieMetaData from "../../atoms/MovieMetaData/MovieMetaData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  deleteFavoriteMovie,
  saveFavoriteMovie,
} from "../../../store/favorites/actions";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/AppConstants";

interface MovieCardProps {
  movieData: IMovie;
  cardWidthInPx: number;
  movieGenres?: IGenre[]
}

function MovieCard(props: MovieCardProps) {
  const { movieData, cardWidthInPx, movieGenres } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme: Theme = useTheme()
  const genreList = useSelector((state: IMainState) => state.genreList.genres);
  const favouriteMovies = useSelector(
    (state: IMainState) => state.favouriteMovies.favoriteMovies
  );
  const genreListFormatted = genreList
    ? getFormattedGenreList(movieData.genre_ids, genreList, movieGenres)
    : "";
  const isMovieFavorite = isFavorite(favouriteMovies, movieData.id);
  const favouriteBtnHandler = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
    if (!isMovieFavorite) {
      dispatch(saveFavoriteMovie(movieData));
    } else {
      dispatch(deleteFavoriteMovie(movieData.id));
    }
  };

  return (
    <Box
      className="card"
      sx={{
        width: `${cardWidthInPx}px`,
        position: "relative",
        zIndex: "2",
        cursor: 'pointer',
        '&:hover:': {
          border: `1px solid ${theme.palette.secondary.main}`,
        }
      }}
      onClick={() =>
        navigate(`${ROUTE_CONSTANTS.MOVIE_DETAILS}/${movieData.id}`)
      }
    >
      <Box
        component="img"
        sx={{
          width: `${cardWidthInPx}px`,
          marginBlockEnd: "10px",
        }}
        src={`${API_IMAGE_PATH}${movieData.poster_path}`}
        alt={movieData.title}
      />
      <MovieMetaData
        movieData={movieData}
        genreListFormatted={genreListFormatted}
      />
      <IconButton
        sx={{
          position: "absolute",
          color: `${theme.palette.text.primary}`,
          right: "0px",
          zIndex: "4",
        }}
        onClick={favouriteBtnHandler}
      >
        {isMovieFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Box>
  );
}

export default MovieCard;
