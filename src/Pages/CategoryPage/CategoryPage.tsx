import { Box, Typography } from "@mui/material";
import React from "react";
import InfiniteScroller from "../../components/molecules/InfiniteScroller/InfiniteScroller";
import { API_STATES, MOVIE_CARD_WIDTH } from "../../constants/AppConstants";
import { IMovie, ISearch } from "../../models/model";

interface CategoryPageProps {
  movies: ISearch<IMovie> | null;
  fetchData: () => void;
  apiState: API_STATES | null;
  category: string;
}

function CategoryPage(props: CategoryPageProps) {
  const { movies, fetchData, apiState, category } = props;

  const noDataComponent =
    apiState === API_STATES.LOADING ? (
      <Box>Loading...</Box>
    ) : (
      <Box>No Movies to display...</Box>
    );
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography
        sx={{
          fontSize: "18px",
          marginInlineStart: "20px",
          borderBottom: "2px solid yellow",
          textTransform: "capitalize",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        {`${category.toLowerCase()} Movies`}
      </Typography>
      <br />
      {movies?.results.length ? (
        <InfiniteScroller
          fetchData={fetchData}
          movieData={movies?.results}
          cardWidthInPx={MOVIE_CARD_WIDTH.CATEGORY_PAGE}
        ></InfiniteScroller>
      ) : (
        noDataComponent
      )}
    </Box>
  );
}

export default CategoryPage;
