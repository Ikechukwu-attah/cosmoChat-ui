import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ActivityOverview from "./activityOverview/activityOverview";
import RealTimeMetrics from "./realTimeMetrics";
import InsightsSection from "./insightsSection";
import ActionableInsights from "./actionableInsights";

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <ActivityOverview />
        <RealTimeMetrics />
        <InsightsSection />
        <ActionableInsights />
      </Box>
    </div>
  );
};

export default Dashboard;
