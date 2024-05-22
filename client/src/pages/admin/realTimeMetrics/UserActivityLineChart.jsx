import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/material";
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

const UserActivityLineChart = () => {
  return (
    <Box style={{ height: 400 }}>
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
    </Box>
  );
};

export default UserActivityLineChart;
