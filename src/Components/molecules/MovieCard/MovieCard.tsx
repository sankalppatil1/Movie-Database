import { Box, IconButton } from "@mui/material";
import React, { BaseSyntheticEvent } from "react";
import { IMovie } from "../../../models/model";
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
}

function MovieCard(props: MovieCardProps) {
  const { movieData, cardWidthInPx } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genreList = useSelector((state: IMainState) => state.genreList.genres);
  const favouriteMovies = useSelector(
    (state: IMainState) => state.favouriteMovies.favoriteMovies
  );
  const genreListFormatted = genreList
    ? getFormattedGenreList(movieData.genre_ids, genreList)
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
          color: "yellow",
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
