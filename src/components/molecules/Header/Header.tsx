import { Box, Button, Theme, Tooltip } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeaderTabsData } from "./Header.helper";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
      {getHeaderTabsData(location.pathname).map((tabData) => (
        <Button
          onClick={() => navigate(tabData.redirectionLink)}
          sx={(theme: Theme) => ({
            borderRadius: '0px',
            textDecoration: "none",
            textTransform: "uppercase",
            color: "black",
            fontSize: "16px",
            ...(tabData.isActive && {
              backgroundColor: "black !important",
            }),
            [theme.breakpoints.down("md")]: {
              minWidth: "55px !important",
            },
          })}
          key={tabData.title}
        >
          <Tooltip title={tabData.title}>
            <tabData.icon
              sx={{
                ...(tabData.isActive && {
                  color: "yellow !important",
                }),
                marginInlineEnd: "5px",
              }}
            ></tabData.icon>
          </Tooltip>
        </Button>
      ))}
    </Box>
  );
}

export default Header;
