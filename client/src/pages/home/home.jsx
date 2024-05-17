import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Chat from "../../features/chat/chat";
import aiImage from "../../features/chat/assets/Chat-pics.png";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <Box
      position={"relative"}
      display={"flex"}
      height={"100%"}
      width={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        bgcolor: "darkblue",

        paddingTop: "40px",
      }}
    >
      <Typography
        variant="h2"
        color={"whitesmoke"}
        textAlign={"center"}
        pt={"40px"}
        position={"absolute"}
        top={"0px"}
      >
        Welcome to CosmoChat App
      </Typography>
      <Box
        display={"flex"}
        gap={"2rem"}
        padding={"0 4rem"}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
        }}
      >
        <Box
          component={"img"}
          src={aiImage}
          alt="ai image"
          width={"50%"}
          sx={{
            width: {
              xs: "100%",
              sm: "75%",
              md: "50%",
              lg: "50%",
            },
          }}
        />

        <Box
          width={"50%"}
          sx={{
            width: {
              xs: "100%",
              sm: "75%",
              md: "50%",
              lg: "50%",
            },
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              textTransform: "capitalize",
              color: "#000",
              width: "100%",
              // position: "absolute",
              // bottom: "10px",
              // right: "5px",
              flex: "1",
              ":hover": {
                color: "#fff",
              },
            }}
            onClick={() => setOpenChat(true)}
          >
            Start Chat
          </Button>
        </Box>
      </Box>

      <Typography textAlign={"center"} color={"#fff"} mt={"10px"}>
        Click on the button to start chatting
      </Typography>

      {openChat && (
        <Chat isOpen={openChat} onClose={() => setOpenChat(false)} />
      )}
    </Box>
  );
};

export default Home;
