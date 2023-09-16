import React from "react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </>
  );
}

export default DefaultLayout;
