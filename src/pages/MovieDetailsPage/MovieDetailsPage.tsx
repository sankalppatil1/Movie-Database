import { Box, Divider, Theme, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_IMAGE_PATH } from "../../services/service";
import {
  clearMovieDetails,
  fetchMovieDetailsStart,
} from "../../store/movie-details/actions";
import { IMainState } from "../../store/store";
import NoDataCard from "../../components/atoms/NoDataCard/NoDataCard";
import { getMovieDetailsKeyValueArray } from "./MovieDetailsPage.helper";
import KeyValueTable from "../../components/atoms/KeyValueTable/KeyValueTable";
import MovieIntro from "../../components/molecules/MovieIntro/MovieIntro";

function MovieDetailsPage() {
  const params = useParams();

  const theme: Theme = useTheme()
  const dispatch = useDispatch();

  const movieDetails = useSelector(
    (state: IMainState) => state.movieDetails.movieDetails
  );

  useEffect(() => {
    dispatch(fetchMovieDetailsStart(Number(params.id)));
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch, params]);

  return movieDetails ? (
    <>
      <Box
        component="img"
        sx={{
          width: `100%`,
          height: "100%",
          margin: "10px 0px",
          opacity: "0.1",
          position: "absolute",
          zIndex: "-1",
        }}
        src={`${API_IMAGE_PATH}${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <MovieIntro movieDetails={movieDetails} />
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Divider
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: ["100%", "80%"],
          }}
        ></Divider>
      </Box>
      <KeyValueTable
        keyValueData={getMovieDetailsKeyValueArray(movieDetails)}
      />
    </>
  ) : (
    <NoDataCard />
  );
}

export default MovieDetailsPage;
