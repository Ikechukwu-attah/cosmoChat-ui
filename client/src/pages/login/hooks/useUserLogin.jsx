import axios from "axios";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../api/apiConfig";
import { useNavigate } from "react-router-dom";

export const useUserLogin = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);
  const navigate = useNavigate();

  const login = async (userLoginData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, userLoginData);
      localStorage.setItem("user", JSON.stringify(response.data));
      setData(response.data);
      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      setIsError(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, data };
};
