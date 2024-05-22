import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const UserFeedback = () => {
  const feedback = [
    "Great support, very helpful! - 5 stars",
    "The response was slow, please improve. - 3 stars",
  ];
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Feedback
        </Typography>
        <List>
          {feedback.map((comment, index) => (
            <ListItem key={index}>
              <ListItemText primary={comment} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserFeedback;
