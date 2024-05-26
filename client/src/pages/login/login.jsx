import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import useStyles from "../../utils/useStyles";

const Login = () => {
  const [data, setData] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("hello james");
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent={"center"}
        height={"100vh"}
      >
        <Typography variant="h4" gutterBottom color={"#fff"}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={data.email || ""}
          onChange={(e) => handleChange(e)}
          className={classes.input}
          InputLabelProps={{
            className: classes.inputLabel,
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={data.password || ""}
          onChange={(e) => handleChange(e)}
          className={classes.input}
          InputLabelProps={{
            className: classes.inputLabel,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
        {/* {message && (
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "16px" }}
          >
            {message}
          </Typography>
        )} */}
      </Box>
    </Container>
  );
};

export default Login;
