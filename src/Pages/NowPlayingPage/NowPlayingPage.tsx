import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroller from "../../components/molecules/InfiniteScroller/InfiniteScroller";
import { API_STATES, MOVIE_CARD_WIDTH } from "../../constants/AppConstants";
import {
  fetchNowPlayingMoviesStart,
  setNowPlayingSearchPage,
} from "../../store/now-playing/actions";
import { IMainState } from "../../store/store";

function NowPlayingPage() {
  const { apiState, searchPage, movies } = useSelector(
    (state: IMainState) => state.nowPlayingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies?.results.length && apiState !== API_STATES.LOADING) {
      dispatch(fetchNowPlayingMoviesStart());
    }
  });

  const fetchMoreNowPlayingMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = searchPage + 1;
      dispatch(setNowPlayingSearchPage(nextPage));
    }
  };

  const noDataComponent =
    apiState === API_STATES.LOADING ? (
      <Box>Loading...</Box>
    ) : (
      <Box>No Movies to display...</Box>
    );

  return movies?.results.length ? (
    <InfiniteScroller
      fetchData={fetchMoreNowPlayingMovies}
      movieData={movies?.results}
      cardWidthInPx={MOVIE_CARD_WIDTH.CATEGORY_PAGE}
    ></InfiniteScroller>
  ) : (
    noDataComponent
  );
}

export default NowPlayingPage;
