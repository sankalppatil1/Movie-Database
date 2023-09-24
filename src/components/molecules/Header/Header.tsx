import { Box, Button, Theme, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeaderTabsData } from "./Header.helper";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));


  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "yellow",
        color: "black",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        position: 'sticky',
        top: '0',
        zIndex: '5',
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
            alignItems: 'center',
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
                fontSize: '20px',
                ...(tabData.isActive && {
                  color: "yellow !important",
                }),
                marginInlineEnd: "5px",
              }}
            ></tabData.icon>
          </Tooltip>
          {isDesktop && <Typography sx={{
            fontSize: '14px',
            fontWeight: '550',
            ...(tabData.isActive && {
              color: "yellow !important",
            }),
          }}>{tabData.title}</Typography>}
        </Button>
      ))}
    </Box>
  );
}

export default Header;
