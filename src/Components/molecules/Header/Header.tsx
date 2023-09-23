import { Box, Button, Theme, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getHeaderTabsData } from "./Header.helper";

function Header() {
  const navigate = useNavigate();

  const tabStyles = (theme: Theme) => ({
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      minWidth: "55px",
    },
  });
  const tabIconStyles = {
    marginInlineEnd: "5px",
  };
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "yellow",
        borderRadius: "8px",
        color: "black",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {getHeaderTabsData().map((tabData) => (
        <Button
          onClick={() => navigate(tabData.redirectionLink)}
          sx={tabStyles}
          key={tabData.title}
        >
          <Tooltip title={tabData.title}>
            <tabData.icon sx={tabIconStyles}></tabData.icon>
          </Tooltip>
        </Button>
      ))}
    </Box>
  );
}

export default Header;
