import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATES, HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { IMainState } from "../../store/store";
import { fetchUpcomingMoviesStart, setUpcomingSearchPage } from "../../store/upcoming/actions";
import CategoryPage from "../CategoryPage/CategoryPage";

function UpcomingMoviesPage() {
  const { apiState, searchPage, movies } = useSelector(
    (state: IMainState) => state.upcomingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies?.results.length && apiState !== API_STATES.LOADING) {
      dispatch(fetchUpcomingMoviesStart());
    }
  });

  const fetchMoreNPopularMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = searchPage + 1;
      dispatch(setUpcomingSearchPage(nextPage));
    }
  };

  

  return (
    <CategoryPage fetchData={fetchMoreNPopularMovies} movies={movies} apiState={apiState} category={HOME_PAGE_TABS_DATA.UPCOMING.title}/>

  );
}

export default UpcomingMoviesPage;
