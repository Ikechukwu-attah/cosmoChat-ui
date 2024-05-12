import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
export const chatRequest = async (req, res) => {
  const userMessage = req.body.message;
  if (!req.body.message) {
    return res.status(400).json({ error: "Message is required" });
  }
  console.log("checking", userMessage);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
          "content-type": "application/json",
        },
      }
    );
    const timestamp = new Date().toISOString();
    const messageWithTimestamp = {
      text: response.data,
      timestamp: timestamp,
      extraInfo: "kudos", // Include additional data here
    };
    console.log("checking", response);
    console.log("Sending response:", messageWithTimestamp); // Add a log to check the response

    res.send(messageWithTimestamp);
  } catch (error) {
    console.log("error from the server", error);
    res.status(500).json(error);
  }
};
