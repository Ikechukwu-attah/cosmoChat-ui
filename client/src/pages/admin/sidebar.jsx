import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  SidebarContext,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} `,
            height: "100vh",
          },
        }}
        collapsed={isCollapsed}
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.menuItemRoot}`]: {
              ":hover": {
                backgroundColor: "green",
                color: "red",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MapOutlinedIcon /> : ""}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">Admin</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <MenuItem icon={isCollapsed ? <HomeOutlined /> : <HomeOutlined />}>
            Home
          </MenuItem>
          <MenuItem>Chat</MenuItem>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Reports</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Support</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
