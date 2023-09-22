import { Box } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IMovie } from "../../../models/model";
import MovieCard from "../MovieCard/MovieCard";

interface InfiniteScrollerProps {
  fetchData: () => void;
  movieData: IMovie[];
}

function InfiniteScroller(props: InfiniteScrollerProps) {
  const { fetchData, movieData } = props;
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
      <Box sx={{ display: "flex", flexWrap: 'wrap', columnGap: '10px' }}>
        {movieData.map((data) => (
          <MovieCard key={data.id} movieData={data} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}

export default InfiniteScroller;
