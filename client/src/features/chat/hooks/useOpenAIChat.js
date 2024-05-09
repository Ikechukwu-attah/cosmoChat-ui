import axios from "axios";
import { useState } from "react";

export const useOpenAIChat = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const openAIChat = async (userInput, onSuccess) => {
    setIsLoading(true);
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
      //   setData(response.data.choices[0].message.content);
      if (typeof onSuccess === "function") {
        onSuccess(aiResponse);
      }

      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { openAIChat, data, isLoading, error };
};
