import React, { useContext, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

import { useUserRegister } from "./hooks/useUserRegister";
import { UserContext } from "../../context/UserContext";
import useStyles from "../../utils/useStyles";

const Register = () => {
  const [data, setData] = useState("");
  const classes = useStyles();
  const { register, isLoading, error } = useUserRegister();
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log({ data });

  console.log({ user });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data);
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
          Register
        </Typography>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={data?.email}
          onChange={(e) => handleChange(e)}
          sx={{ color: "#fff", backgroundColor: "#fff" }}
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
          margin="normal"
          value={data?.password}
          sx={{ color: "#fff", backgroundColor: "#fff" }}
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
          Register
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

export default Register;
