import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useChatStatistics } from "../hooks/useChatStatistics";
import { useSystemPerformance } from "../hooks/useSystemPerformance";
import { useSectionStatistics } from "../hooks/useSectionStatistics";

const ActivityOverview = () => {
  const { chatStatistics, data, error, isLoading } = useChatStatistics();
  const {
    data: systemData,
    systemPerformance,
    isLoading: systemIsloading,
    error: systemError,
  } = useSystemPerformance();

  const {
    sectionStatistics,
    isLoading: isLoadingSectionStatistics,
    data: sectionStatisticsData,
    error: sectionStatisticsError,
  } = useSectionStatistics();

  console.log("section statistics", sectionStatisticsData);

  useEffect(() => {
    chatStatistics();
    systemPerformance();
    sectionStatistics();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ minHeight: 200 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Session Management
            </Typography>
            <Typography variant="body1" gutterBottom>
              Active Sessions: {sectionStatisticsData?.activeSessions}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Peak Active Sessions: {sectionStatisticsData?.peakActiveSessions}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ minHeight: 200 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Chat Statistics
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Chats: {data?.totalChats}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Resolved Chats: {data?.resolvedChats}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Average Response Time: {Math.floor(data?.averageResponseTime)}{" "}
              mins
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ minHeight: 200 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              System Performance
            </Typography>
            <Typography variant="body1" gutterBottom>
              API Response Time: {systemData?.apiResponseTime}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Success Rate: {systemData?.successRate}%
            </Typography>
            <Typography variant="body1" gutterBottom>
              Error Rate: {systemData?.errorRate}%
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ActivityOverview;
