import React from "react";
import { IMovie } from "../../../models/model";
import Carousel from "../Carousel/Carousel";
import HeaderLink from "../../atoms/HeaderLink/HeaderLink";
import MovieCard from "../MovieCard/MovieCard";
import { MOVIE_CARD_WIDTH } from "../../../constants/AppConstants";

interface MovieCarouselProps {
    movieData: IMovie[]
    headerDetails: { title: string; viewMoreLink: string }
}

function MovieCarousel(props: MovieCarouselProps) {
    const {movieData, headerDetails} = props
  return (
    <>
      <HeaderLink
        headerDetails={headerDetails}
      />
      <Carousel>
        {movieData.map((data) => (
          <MovieCard key={data.id} movieData={data} cardWidthInPx={MOVIE_CARD_WIDTH.HOME_PAGE}/>
        ))}
      </Carousel>
    </>
  );
}

export default MovieCarousel;
