import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useOpenAIChat } from "./hooks/useOpenAIChat";

const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const { data, error, isLoading, openAIChat } = useOpenAIChat();
  //   console.log("aiResponse", aiResponse);

  console.log({ isLoading });
  console.log(messages);
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const onSuccess = (aiResponse) => {
    const cleanedResponse = aiResponse.replace(/^(AI|ai):\s*/, "");
    setMessages((prev) => [...prev, { text: cleanedResponse, sender: "ai" }]);
    console.log(aiResponse);
  };
  const sendMessage = async (e) => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");

    const conversationHistory = newMessages
      .map((msg) => `${msg.sender === "ai" ? "AI" : "User"}: ${msg.text}`)
      .join("\n");
    console.log(conversationHistory);
    openAIChat(conversationHistory, onSuccess);
  };

  const ThinkingIndicator = () => {
    const [ellipsis, setEllipsis] = useState("");

    useEffect(() => {
      const intervalId = setInterval(() => {
        setEllipsis((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);

      return () => clearInterval(intervalId);
    }, []);

    return <Typography>{`Thinking${ellipsis}`}</Typography>;
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
        {messages?.map((message, index) => (
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
                    {isLoading ? (
                      <>
                        <ThinkingIndicator />
                      </>
                    ) : (
                      <Typography component={"h4"}> {message.text}</Typography>
                    )}
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
