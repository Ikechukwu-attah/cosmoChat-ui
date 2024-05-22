import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const userActivityData = [
  {
    id: "user activity",
    data: [
      { x: "Jan", y: 3 },
      { x: "Feb", y: 5 },
      { x: "Mar", y: 6 },
      { x: "Apr", y: 4 },
      { x: "May", y: 7 },
    ],
  },
];

const UserBehaviorAnalysis = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Behavior Analysis
        </Typography>
        <div style={{ height: 300 }}>
          <ResponsiveLine
            data={userActivityData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Month",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Activity",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </div>
        <List>
          <ListItem>
            <ListItemText primary="Peak usage time is between 10 AM and 2 PM." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Common issue: Users frequently ask how to reset their passwords." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Anomaly detected: Sudden drop in user activity on weekends." />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default UserBehaviorAnalysis;
