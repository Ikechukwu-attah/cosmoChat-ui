import React from "react";

import RecentActivities from "./recentActivities";
import TopPerformers from "./topPerformers";
import UserFeedback from "./userFeedback";
import { Box, Grid } from "@mui/material";

const InsightsSection = () => {
  return (
    <Box>
      <h2>Insight Sections</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopPerformers />
        </Grid>
        <Grid item xs={12} md={4}>
          <UserFeedback />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InsightsSection;
