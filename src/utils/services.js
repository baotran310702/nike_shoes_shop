import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5252",
});

export const login = async (username, password) =>
  await api.post("/api/Login", {
    username: username,
    password: password,
  });

export const authen = async (token) => {
  const customHeader = {
    Authorization: "Bearer " + token,
  };
  await api.get("/api/Login", {
    headers: customHeader,
  });
};
