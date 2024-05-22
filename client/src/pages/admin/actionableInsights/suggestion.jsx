import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Suggestions = () => {
  const suggestions = [
    "Increase support staff during peak usage times to reduce response times.",
    "Implement a self-service password reset feature to address common user issues.",
    "Launch a weekend engagement campaign to boost user activity.",
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Suggestions
        </Typography>
        <List>
          {suggestions.map((suggestion, index) => (
            <ListItem key={index}>
              <ListItemText primary={suggestion} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Suggestions;
