import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/AppConstants";

function Header() {
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "yellow",
        borderRadius: "8px",
        color: "black",
        height: "10%",
      }}
    >
      <Link
        to={ROUTE_CONSTANTS.HOME}
        style={{ textDecoration: "none", textTransform: "uppercase", color: 'black' }}
      >
        HOME
      </Link>
    </Box>
  );
}

export default Header;
