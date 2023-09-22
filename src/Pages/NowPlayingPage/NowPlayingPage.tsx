import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroller from "../../components/molecules/InfiniteScroller/InfiniteScroller";
import { API_STATES } from "../../constants/AppConstants";
import { fetchNowPlayingMoviesStart, setNowPlayingSearchPage } from "../../store/now-playing/actions";
import { IMainState } from "../../store/store";

function NowPlayingPage() {
  const { apiState, nowPlayingSearchPage, nowPlayingMovies } = useSelector(
    (state: IMainState) => state.nowPlayingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!nowPlayingMovies?.results.length && apiState !== API_STATES.LOADING) {
      dispatch(fetchNowPlayingMoviesStart());
    }
  })
  

  const fetchMoreNowPlayingMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = nowPlayingSearchPage + 1;
      dispatch(setNowPlayingSearchPage(nextPage));
    }
  };

  return (
    nowPlayingMovies?.results.length ? <InfiniteScroller
      fetchData={fetchMoreNowPlayingMovies}
      movieData={nowPlayingMovies?.results}
    ></InfiniteScroller> : <Box>No Movies to display...</Box>
  );
}

export default NowPlayingPage;
