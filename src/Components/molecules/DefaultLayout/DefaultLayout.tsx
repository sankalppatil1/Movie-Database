import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function DefaultLayout() {
  return (
    <>
      <Header/>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default DefaultLayout;
