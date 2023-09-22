import { Box, Typography } from "@mui/material";
import React from "react";
import { IMovie } from "../../../models/model";
import { API_IMAGE_PATH } from "../../../services/service";
import StarRateIcon from "@mui/icons-material/StarRate";

function MovieCard(props: { movieData: IMovie }) {
  return (
    <Box
      className="card"
      sx={{
        width: "100px",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100px",
        }}
        src={`${API_IMAGE_PATH}${props.movieData.poster_path}`}
        alt={props.movieData.title}
      />
      <Typography>
        <StarRateIcon />
        {props.movieData.vote_average}/10
        ({props.movieData.vote_count})
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "12px",
          color: "white",
        }}
      >
        {props.movieData.title}
      </Typography>
    </Box>
  );
}

export default MovieCard;
