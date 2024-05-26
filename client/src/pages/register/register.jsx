import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
      });
      setMessage(`Registration successful. User ID: ${response.data.userId}`);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
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
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          style={{ marginTop: "16px" }}
        >
          Register
        </Button>
        {message && (
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "16px" }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Register;
