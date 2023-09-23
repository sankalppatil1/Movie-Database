import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATES, HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import {
  fetchNowPlayingMoviesStart,
  setNowPlayingSearchPage,
} from "../../store/now-playing/actions";
import { IMainState } from "../../store/store";
import CategoryPage from "../CategoryPage/CategoryPage";

function NowPlayingMoviesPage() {
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

  return (
      <CategoryPage fetchData={fetchMoreNowPlayingMovies} movies={movies} apiState={apiState} category={HOME_PAGE_TABS_DATA.NOW_PLAYING.title}/>
  );
}

export default NowPlayingMoviesPage;
