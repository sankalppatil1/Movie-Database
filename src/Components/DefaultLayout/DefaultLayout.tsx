import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../molecules/Header/Header";

function DefaultLayout() {
  return (
    <>
      <Header/>
      <Box>
        <Outlet />
      </Box>
      <Box>Footer</Box>
    </>
  );
}

export default DefaultLayout;
