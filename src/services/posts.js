import { apiClient } from "./config";

export const apiCreatePost = async (payload) => {
    return apiClient.post("/create-post", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };