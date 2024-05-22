import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";

const messageVolumeData = [
  { month: "Jan", messages: 30 },
  { month: "Feb", messages: 50 },
  { month: "Mar", messages: 60 },
  { month: "Apr", messages: 40 },
  { month: "May", messages: 70 },
];

const MessageVolumeBarChart = () => {
  return (
    <Box style={{ height: 400 }}>
      <ResponsiveBar
        data={messageVolumeData}
        keys={["messages"]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Messages",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default MessageVolumeBarChart;
