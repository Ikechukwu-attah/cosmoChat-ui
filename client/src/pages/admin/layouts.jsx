import React from "react";
import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./topbar";
import "../../index.css";
import Sidebar from "./sidebar";
import SideBar from "./sidebar";

const DashboardLayouts = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app" height={"100vh"}>
          <SideBar />
          <main className="content" style={{ flex: 1 }}>
            <TopBar />
            <Box p={"20px"}>
              <Outlet />
            </Box>
          </main>{" "}
        </Box>
      </ThemeProvider>{" "}
    </ColorModeContext.Provider>
  );
};

export default DashboardLayouts;
