import React from "react";
import { Box, Grid } from "@mui/material";

import UserBehaviorAnalysis from "./userBehaviorAnalysis";
import Suggestions from "./suggestion";

const ActionableInsights = () => {
  return (
    <Box>
      <header>
        <h2>Actionable Insights</h2>
      </header>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <UserBehaviorAnalysis />
        </Grid>
        <Grid item xs={12} md={6}>
          <Suggestions />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActionableInsights;
