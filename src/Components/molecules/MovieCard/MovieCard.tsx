import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IMovie } from "../../../models/model";
import { API_IMAGE_PATH } from "../../../services/service";
import StarRateIcon from "@mui/icons-material/StarRate";

interface MovieCardProps {
  movieData: IMovie;
  cardWidthInPx: number;
}

function MovieCard(props: MovieCardProps) {
  const { movieData, cardWidthInPx } = props;
  return (
    <Box
      className="card"
      sx={{
        width: `${cardWidthInPx}px`,
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{
          width: `${cardWidthInPx}px`,
          marginBlockEnd: "10px",
        }}
        src={`${API_IMAGE_PATH}${movieData.poster_path}`}
        alt={movieData.title}
      />
      <Tooltip title={movieData.title}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "black",
            position: "absolute",
            top: "0%",
            opacity: "0.8",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginInlineStart: "10px",
              width: "80%",
            }}
          >
            <Box sx={{display:'flex', columnGap: '10px'}}>
              <StarRateIcon
                sx={{
                  fontSize: "20px",
                }}
              />
            <Typography
              sx={{
                fontSize: "15px",
              }}
            >
              {movieData.vote_average}/10 ({movieData.vote_count})
            </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "calc(90%)",
                  fontFamily: "monospace",
                  fontSize: "18px",
                }}
              >
                {movieData.title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}

export default MovieCard;
