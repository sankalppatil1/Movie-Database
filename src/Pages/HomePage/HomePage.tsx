import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "../../components/molecules/MovieCarousel/MovieCarousel";
import { HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { IMovie } from "../../models/model";
import { fetchNowPlayingMoviesStart } from "../../store/now-playing/actions";
import { IMainState } from "../../store/store";

function HomePage() {
  const dispatch = useDispatch();
  const nowPlayingMovies: IMovie[] | undefined = useSelector(
    (state: IMainState) => state.nowPlayingMovies.movies?.results
  );

  useEffect(() => {
    if (!nowPlayingMovies?.length) {
    dispatch(fetchNowPlayingMoviesStart());
    }
  }, [dispatch, nowPlayingMovies]);

  return (
    <Box>
      {nowPlayingMovies?.length && <MovieCarousel movieData={nowPlayingMovies} headerDetails={HOME_PAGE_TABS_DATA.NOW_PLAYING}></MovieCarousel>}
    </Box>
  );
}

export default HomePage;
