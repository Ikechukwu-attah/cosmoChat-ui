import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post(
        "http://localhost:8085/api/chat",
        {
          message: userInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const aiResponse = response.data.choices[0].message.content;
      console.log("aiResponse", response.data.choices[0].message.content);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
    } catch (error) {
      console.log("Error sending message", error);
      setMessages((prev) => [...prev, { text: "Failed to fetch response" }]);
    }
  };

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position={"absolute"}
      sx={{ bgcolor: "#050522" }}
      top={"0px"}
      right={"0px"}
      left={"0px"}
      bottom={"0px"}
      //   p={"20px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        height="calc(100% - 60px)"
        overflow={"auto"}
      >
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {message.sender === "ai" ? (
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                p={"10px"}
                flexDirection={"column"}
                mt={"20px"}
              >
                <Box display="flex" gap={"10px"} alignItems={"center"}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6985/6985703.png"
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                    alt="AI icon"
                  />
                  <Box
                    bgcolor="#e1f5fe"
                    p="5px"
                    borderRadius="10px"
                    width={"50%"}
                  >
                    <h4>{message.text}</h4>
                  </Box>
                </Box>

                <Typography component={"span"} color={"white"} pl={"40px"}>
                  1st may 2024
                </Typography>
              </Box>
            ) : (
              <Box display={"flex"} justifyContent={"flex-end"} p={"10px"}>
                <Box
                  bgcolor="#228047"
                  p="5px"
                  borderRadius="10px"
                  color={"#fff"}
                >
                  <h4>{message.text}</h4>
                </Box>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
      <Box
        display="flex"
        bgcolor="#fff"
        border="1px solid green"
        position="absolute"
        bottom="0"
        left="10px"
        right="10px"
        borderRadius={"10px"}
        mb="0px"
        p="10px"
        width="auto"
      >
        <textarea
          style={{
            height: "40px",
            maxHeight: "100px",
            flex: 1,
            boxSizing: "border-box",
            border: "none",
            outline: "none",
            resize: "none",
          }}
          placeholder="Start typing..."
          aria-label="Enter your message here"
          name="message"
          onChange={handleChange}
          value={userInput}
        />
        <IconButton
          aria-label="send"
          style={{ flex: "none" }}
          onClick={() => sendMessage()}
        >
          <SendIcon />
        </IconButton>
      </Box>
      <Box
        onClick={() => onClose()}
        cursor={"pointer"}
        display={"flex"}
        position={"absolute"}
        top={"10px"}
        right={"50px"}
      >
        {isOpen && (
          <CloseIcon
            fontSize="large"
            sx={{ color: "#fff", cursor: "pointer" }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Chat;
