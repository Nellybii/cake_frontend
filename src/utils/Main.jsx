export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5555"
    : process.env.BACKEND_URL;
