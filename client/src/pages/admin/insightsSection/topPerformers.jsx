import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";

const TopPerformers = () => {
  const performers = [
    {
      id: "A1",
      name: "Agent 1",
      stats: "50 resolved chats, avg response time 2 mins, 95% satisfaction",
    },
    {
      id: "A2",
      name: "Agent 2",
      stats: "45 resolved chats, avg response time 3 mins, 90% satisfaction",
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Top Performers
        </Typography>
        <List>
          {performers.map((performer) => (
            <ListItem key={performer.id}>
              <Avatar>{performer.id}</Avatar>
              <ListItemText
                primary={`${performer.name}: ${performer.stats}`}
                sx={{ ml: "24px" }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;
