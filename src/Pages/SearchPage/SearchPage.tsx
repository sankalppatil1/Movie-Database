import { InputBase } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_STATES, HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { setSearchPage, setSearchQuery } from "../../store/search/actions";
import { IMainState } from "../../store/store";
import CategoryPage from "../CategoryPage/CategoryPage";

function SearchPage() {

  const dispatch = useDispatch()
  const apiState = useSelector((state: IMainState)=> state.search.fetchStatus)
  const movies = useSelector((state: IMainState)=> state.search.searchResult)
  const searchPage = useSelector((state: IMainState)=> state.search.searchPage)

  const fetchMoreSearchedMovies = () => {
    if (apiState !== API_STATES.LOADING) {
      const nextPage = searchPage + 1;
      dispatch(setSearchPage(nextPage));
    }
  };

  return (
    <>
      <InputBase
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        placeholder="Search Movies"
        onChange={(e)=> dispatch(setSearchQuery(e.target.value))}
        inputProps={{
          "aria-label": "search movies",
          style: {
            width: "60%",
            height: "50px",
            padding: "5px",
            border: "2px solid yellow",
            color: "yellow",
          },
        }}
      />
      <CategoryPage fetchData={fetchMoreSearchedMovies} movies={movies} apiState={apiState} category={`${HOME_PAGE_TABS_DATA.SEARCH.title}ed`}/>

    </>
  );
}

export default SearchPage;
