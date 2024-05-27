import React, { useContext, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

import useStyles from "../../utils/useStyles";
import { useUserLogin } from "./hooks/useUserLogin";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [data, setData] = useState("");
  const classes = useStyles();
  const { login, isLoading, error } = useUserLogin();
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log({ data });

  console.log({ user });
  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
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
          name="email"
          margin="normal"
          value={data.email}
          sx={{ color: "#fff", backgroundColor: "#fff" }}
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
          name="password"
          fullWidth
          sx={{ color: "#fff", backgroundColor: "#fff" }}
          margin="normal"
          value={data.password}
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
