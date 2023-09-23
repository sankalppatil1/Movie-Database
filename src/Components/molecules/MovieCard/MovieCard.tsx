import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { IMovie } from "../../../models/model";
import { API_IMAGE_PATH } from "../../../services/service";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useSelector } from "react-redux";
import { IMainState } from "../../../store/store";
import { getFormattedGenreList } from "../../../Utility/Utilities";

interface MovieCardProps {
  movieData: IMovie;
  cardWidthInPx: number;
}

function MovieCard(props: MovieCardProps) {
  const { movieData, cardWidthInPx } = props;
  const genreList = useSelector((state: IMainState) => state.genreList.genres);
  const genreListFormatted = genreList
    ? getFormattedGenreList(movieData.genre_ids, genreList)
    : "";

  const tooltipEle = (
    <Box>
      {movieData.title}
      <br />
      {genreListFormatted}
    </Box>
  );
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
      <Tooltip
        title={tooltipEle}
        sx={{
          zIndex: "2",
        }}
      >
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
            <Box>
              <Typography
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "calc(90%)",
                  fontSize: "18px",
                }}
              >
                {movieData.title}
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "calc(90%)",
                fontSize: "12px",
                mb: "5px",
                color: "yellow",
              }}
            >
              {genreListFormatted}
            </Box>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              <StarRateIcon
                sx={{
                  fontSize: "20px",
                  color: "yellow",
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
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}

export default MovieCard;
