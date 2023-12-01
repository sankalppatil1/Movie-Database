import { Box, Theme, useTheme } from "@mui/material";
import React from "react";

function NoDataCard() {
  const theme: Theme = useTheme()
  return (
    <Box
      sx={{
        margin: "20px",
        border: `3px solid ${theme.palette.secondary.main}`,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      No Data to Display...
    </Box>
  );
}

export default NoDataCard;
