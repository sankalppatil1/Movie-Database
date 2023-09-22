import React from "react";
import { IMovie } from "../../../models/model";
import Carousel from "../Carousel/Carousel";
import HeaderLink from "../HeaderLink/HeaderLink";
import MovieCard from "../MovieCard/MovieCard";

interface MovieCarouselProps {
    movieData: IMovie[]
    headerDetails: { title: string; viewMoreLink: string }
}

function MovieCarousel(props: MovieCarouselProps) {
    const {movieData} = props
  return (
    <>
      <HeaderLink
        headerDetails={{ title: "NOW PLAYING", viewMoreLink: "/now-playing" }}
      />
      <Carousel>
        {movieData.map((data) => (
          <MovieCard key={data.id} movieData={data} />
        ))}
      </Carousel>
    </>
  );
}

export default MovieCarousel;
