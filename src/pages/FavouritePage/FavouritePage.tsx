import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NoMoviesCard from "../../components/atoms/NoDataCard/NoDataCard";
import MovieCard from "../../components/molecules/MovieCard/MovieCard";
import {
  HOME_PAGE_TABS_DATA,
  MOVIE_CARD_WIDTH,
} from "../../constants/AppConstants";
import { IMovie } from "../../models/model";
import { IMainState } from "../../store/store";

function FavouritePage() {
  const favoriteMovies: IMovie[] = useSelector(
    (state: IMainState) => state.favouriteMovies.favoriteMovies
  );

  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const contentToDisplay = favoriteMovies?.length ? (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: favoriteMovies.length > 2 && isDesktop ? 'space-between' : 'space-evenly' ,
        rowGap: "30px",
      }}
    >
      {favoriteMovies.map((data) => (
        <MovieCard
          key={data.id}
          movieData={data}
          cardWidthInPx={MOVIE_CARD_WIDTH.CATEGORY_PAGE}
        />
      ))}
    </Box>
  ) : (
    <NoMoviesCard />
  );
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography
        sx={{
          fontSize: "18px",
          borderBottom: "2px solid yellow",
          textTransform: "capitalize",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        {`${HOME_PAGE_TABS_DATA.FAVOURITE.title.toLowerCase()} Movies`}
      </Typography>
      <br />
      {contentToDisplay}
    </Box>
  );
}

export default FavouritePage;
