import { Box } from "@mui/material";
import React from "react";

function NoDataCard() {
  return (
    <Box
      sx={{
        margin: "20px",
        border: "3px solid yellow",
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
