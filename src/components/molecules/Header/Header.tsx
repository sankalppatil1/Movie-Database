import { Box, Button, Theme, Tooltip, useTheme } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeaderTabsData } from "./Header.helper";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme: Theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '0px',
      zIndex: '5',
      width: '100%',
    }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: `${theme.palette.secondary.main}`,
          color: `${theme.palette.primary.main}`,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '8px',
          boxShadow: '-1px 0px 11px 3px rgba(222,222,214,0.47)'
        }}
      >
        {getHeaderTabsData(location.pathname).map((tabData) => (
          <Button
            onClick={() => navigate(tabData.redirectionLink)}
            sx={(theme: Theme) => ({
              textDecoration: "none",
              textTransform: "uppercase",
              color: `${theme.palette.primary.main}`,
              alignItems: 'center',
              ...(tabData.isActive && {
                backgroundColor: `${theme.palette.primary.main} !important`,
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
                    color: `${theme.palette.secondary.main} !important`,
                  }),
                  marginInlineEnd: "5px",
                }}
              ></tabData.icon>
            </Tooltip>
          </Button>
        ))}
      </Box>

    </Box>
  );
}

export default Header;
