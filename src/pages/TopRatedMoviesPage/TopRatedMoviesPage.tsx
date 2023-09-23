import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATES, HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { IMainState } from "../../store/store";
import { fetchTopRatedMoviesStart, setTopRatedSearchPage } from "../../store/top-rated/actions";
import CategoryPage from "../CategoryPage/CategoryPage";

function TopRatedMoviesPage() {
  const { apiState, searchPage, movies } = useSelector(
    (state: IMainState) => state.topRatedMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies?.results.length && apiState !== API_STATES.LOADING) {
      dispatch(fetchTopRatedMoviesStart());
    }
  });

  const fetchMoreTopRatedMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = searchPage + 1;
      dispatch(setTopRatedSearchPage(nextPage));
    }
  };

  

  return (
    <CategoryPage fetchData={fetchMoreTopRatedMovies} movies={movies} apiState={apiState} category={HOME_PAGE_TABS_DATA.TOP_RATED.title}/>

  );
}

export default TopRatedMoviesPage;
