import axios from "axios";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../api/apiConfig";

export const useSystemPerformance = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const systemPerformance = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.SYSTEMPERFORMANCE);

      setData(response.data);
    } catch (error) {
      setIsError(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { systemPerformance, isLoading, error, data };
};
