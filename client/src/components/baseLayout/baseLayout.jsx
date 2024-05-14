import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <Box
      flexDirection={"column"}
      marginLeft={"auto"}
      marginRight={"auto"}
      display={"flex"}
      height={"100vh"}
      maxWidth={"1366px"}
      sx={{ bgcolor: "darkblue" }}
      className="app"
    >
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
