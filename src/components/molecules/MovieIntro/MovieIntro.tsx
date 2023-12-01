import {
  Box,
  Button,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_CARD_WIDTH } from "../../../constants/AppConstants";
import { IMovieDetails } from "../../../models/model";
import { API_IMAGE_PATH } from "../../../services/service";
import {
  deleteFavoriteMovie,
  saveFavoriteMovie,
} from "../../../store/favorites/actions";
import { IMainState } from "../../../store/store";
import { isFavorite } from "../../../Utility/Utilities";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface MovieIntroProps {
  movieDetails: IMovieDetails;
}
function MovieIntro(props: MovieIntroProps) {
  const { movieDetails } = props;
  const favouriteMovies = useSelector(
    (state: IMainState) => state.favouriteMovies.favoriteMovies
  );
  const theme: Theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isMovieFavorite = isFavorite(favouriteMovies, movieDetails.id);
  const favouriteBtnHandler = () => {
    if (!isMovieFavorite) {
      dispatch(saveFavoriteMovie(movieDetails));
    } else {
      dispatch(deleteFavoriteMovie(movieDetails.id));
    }
  };

  let favouriteBtnConfig;

  if (isMovieFavorite) {
    favouriteBtnConfig = {
      text: "Remove from Favourites",
      icon: FavoriteIcon,
      backGroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.text.primary} !important`,
    };
  } else {
    favouriteBtnConfig = {
      text: "Add to Favourites",
      icon: FavoriteBorderIcon,
      backGroundColor: `${theme.palette.secondary.main} !important`,
      color: `${theme.palette.primary.main} !important`,
    };
  }

  return (
    <Box
      sx={{
        display: "flex",
        margin: "20px",
        flexDirection: ["column", "row"],
      }}
    >
      <Box
        component="img"
        sx={{
          width: ["100%", `${MOVIE_CARD_WIDTH.HOME_PAGE}px`],
          marginBlockEnd: "10px",
        }}
        src={`${API_IMAGE_PATH}${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["100%", "40%"],
          marginInlineStart: ["initial", "20px"],
        }}
      >
        <Typography variant={isDesktop ? "h2" : "h4"}>
          {movieDetails.title}
        </Typography>
        {movieDetails.tagline && <Typography variant="h6" sx={{ color: `${theme.palette.text.primary}` }}>
          ({movieDetails.tagline})
        </Typography>}
        <Typography>{movieDetails.overview}</Typography>
        <Button
          onClick={favouriteBtnHandler}
          sx={{
            border: `1px solid ${theme.palette.secondary.main}`,
            width: "fit-content",
            mt: "20px",
            backgroundColor: favouriteBtnConfig.backGroundColor,
            color: favouriteBtnConfig.color,
          }}
        >
          {favouriteBtnConfig.text}
          <favouriteBtnConfig.icon
            sx={{ ml: "10px" }}
          ></favouriteBtnConfig.icon>
        </Button>
      </Box>
    </Box>
  );
}

export default MovieIntro;
