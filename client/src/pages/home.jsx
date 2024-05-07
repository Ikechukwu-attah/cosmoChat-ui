import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Chat from "../features/chat/chat";

const Home = () => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <Box
      position={"relative"}
      height={"100%"}
      width={"100%"}
      sx={{
        bgcolor: "darkblue",

        paddingTop: "40px",
      }}
    >
      <Typography variant="h2" color={"whitesmoke"} textAlign={"center"}>
        Welcome to CosmoChat App
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#fff",
          textTransform: "capitalize",
          color: "#000",
          position: "absolute",
          bottom: "10px",
          right: "5px",
          ":hover": {
            color: "#fff",
          },
        }}
        onClick={() => setOpenChat(true)}
      >
        Start Chat
      </Button>
      <Typography textAlign={"center"} color={"#fff"} mt={"10px"}>
        Click on the button by the bottom right to start chatting
      </Typography>

      {openChat && (
        <Chat isOpen={openChat} onClose={() => setOpenChat(false)} />
      )}
    </Box>
  );
};

export default Home;
