import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const ActivityOverview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ minHeight: 200 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Session Management
            </Typography>
            <Typography variant="body1" gutterBottom>
              Active Sessions: 120
            </Typography>
            <Typography variant="body1" gutterBottom>
              Peak Active Sessions: 200
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
              Total Chats: 300
            </Typography>
            <Typography variant="body1" gutterBottom>
              Resolved Chats: 280
            </Typography>
            <Typography variant="body1" gutterBottom>
              Average Response Time: 2 mins
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
              API Response Time: 200ms
            </Typography>
            <Typography variant="body1" gutterBottom>
              Success Rate: 99%
            </Typography>
            <Typography variant="body1" gutterBottom>
              Error Rate: 1%
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
