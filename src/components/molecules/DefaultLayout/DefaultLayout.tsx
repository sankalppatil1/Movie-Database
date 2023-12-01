import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ThemeToggle from "../../atoms/ThemeToggle/ThemeToggle";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Box sx={{ margin: ['0 20px', '0 50px'] }}>
        <Outlet />
      </Box>
      <ThemeToggle />
    </>
  );
}

export default DefaultLayout;
