import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/login", payload);
};


