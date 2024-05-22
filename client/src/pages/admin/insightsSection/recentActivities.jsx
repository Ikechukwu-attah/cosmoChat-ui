import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const RecentActivities = () => {
  const activities = [
    "User started a session at 10:00 AM",
    "User sent a message: 'How can I reset my password?' at 10:05 AM",
    "User session ended at 10:30 AM",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Recent Activities
        </Typography>
        <List>
          {activities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText primary={activity} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
