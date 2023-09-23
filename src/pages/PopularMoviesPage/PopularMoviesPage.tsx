import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATES, HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { fetchPopularMoviesStart, setPopularSearchPage } from "../../store/popular/actions";
import { IMainState } from "../../store/store";
import CategoryPage from "../CategoryPage/CategoryPage";

function PopularMoviesPage() {
  const { apiState, searchPage, movies } = useSelector(
    (state: IMainState) => state.popularMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies?.results.length && apiState !== API_STATES.LOADING) {
      dispatch(fetchPopularMoviesStart());
    }
  });

  const fetchMoreNPopularMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = searchPage + 1;
      dispatch(setPopularSearchPage(nextPage));
    }
  };

  

  return (
    <CategoryPage fetchData={fetchMoreNPopularMovies} movies={movies} apiState={apiState} category={HOME_PAGE_TABS_DATA.POPULAR.title}/>

  );
}

export default PopularMoviesPage;
