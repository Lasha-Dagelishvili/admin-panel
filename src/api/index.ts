import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_SUPABASE_URL,
};

export const httpClient = axios.create(axiosConfig);

export const setAuthorizationHeader = (accessToken: string) => {
  httpClient.defaults.headers["Authorization"] = accessToken;
};