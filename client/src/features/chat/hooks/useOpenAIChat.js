import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

export const useOpenAIChat = () => {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const { user } = useContext(UserContext);
    console.log(user.userId);

    const openAIChat = async(userInput, onSuccess) => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:8085/api/chat", {
                    message: userInput,
                    userId: user.userId,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("response", response);
            const aiResponse = response.data;
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