import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./topbar";
import "../../index.css";

const DashboardLayouts = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <h1>side bar</h1>
          <main className="content" style={{ flex: 1 }}>
            <TopBar />
            <Outlet />
          </main>{" "}
        </div>
      </ThemeProvider>{" "}
    </ColorModeContext.Provider>
  );
};

export default DashboardLayouts;
