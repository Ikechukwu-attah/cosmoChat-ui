import axios from "axios";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../api/apiConfig";

export const useUserLogin = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const useLogin = async (userLoginData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, userLoginData);
      localStorage.setItem("user", JSON.stringify(response.data));
      setData(response.data);
    } catch (error) {
      setIsError(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { useLogin, isLoading, error, data };
};
