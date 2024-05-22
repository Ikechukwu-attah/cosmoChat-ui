import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import UserActivityLineChart from "./UserActivityLineChart";
import MessageVolumeBarChart from "./messageVolumeBarChart";
import EngagementPieChart from "./engagementPieChart";

const RealTimeMetrics = () => {
  return (
    <Box>
      <h2>Real-Time Metrics</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <UserActivityLineChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <MessageVolumeBarChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <EngagementPieChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RealTimeMetrics;
