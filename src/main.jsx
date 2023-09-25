import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./user_pages/LoginPage.jsx";
import Checkout from "./user_pages/Checkout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </Provider>
);
