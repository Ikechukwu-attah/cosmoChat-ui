import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const engagementData = [
  { id: "High", label: "High", value: 60 },
  { id: "Medium", label: "Medium", value: 25 },
  { id: "Low", label: "Low", value: 15 },
];

const EngagementPieChart = () => (
  <Box height="400px">
    <ResponsivePie
      data={engagementData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  </Box>
);

export default EngagementPieChart;
