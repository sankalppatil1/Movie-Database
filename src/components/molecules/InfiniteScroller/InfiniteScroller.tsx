import { Box, Theme, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../../models/model";
import MovieCard from "../MovieCard/MovieCard";

interface InfiniteScrollerProps {
  fetchData: () => void;
  movieData: IMovie[];
  cardWidthInPx: number;
}

function InfiniteScroller(props: InfiniteScrollerProps) {
  const { fetchData, movieData, cardWidthInPx } = props;

  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <InfiniteScroll
      dataLength={movieData.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: movieData.length > 2 && isDesktop ? 'space-between' : 'space-evenly', rowGap: '30px' }}>
        {movieData.map((data) => (
          <MovieCard key={data.id} movieData={data} cardWidthInPx={cardWidthInPx} />
        ))}
      </Box>
    </InfiniteScroll >
  );
}

export default InfiniteScroller;
