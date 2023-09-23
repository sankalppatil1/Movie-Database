import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import StarRateIcon from "@mui/icons-material/StarRate";
import { IMovie } from '../../../models/model';

interface MovieMetaDataProps {
    movieData : IMovie
    genreListFormatted: string
}
function MovieMetaData(props: MovieMetaDataProps) {
    const {movieData, genreListFormatted}= props

    const tooltipEle = (
        <Box>
          {movieData.title}
          <br />
          {genreListFormatted}
        </Box>
      );
  return (
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
            <Box
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "calc(90%)",
                fontSize: "12px",
                mb: "5px",
              }}
            >
              {movieData.release_date}
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
  )
}

export default MovieMetaData