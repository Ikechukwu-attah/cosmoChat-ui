import axios from "axios";
import { useState } from "react";
import { API_ENDPOINTS } from "../../../api/apiConfig";

export const useSectionStatistics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const sectionStatistics = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_ENDPOINTS.SESSIONSTATISTICS);

      setData(response.data);
    } catch (error) {
      setIsError(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { sectionStatistics, isLoading, error, data };
};
