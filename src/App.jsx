import React from "react";
import { FeatureItems, Hero, Navbar, Sales, TopStories } from "./components";
import Cart from "./components/Cart/Cart";
import { footerAPI } from "./data/data.js";
import Footer from "./components/Footer";
import { LandingPage, LoginPage, Checkout } from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
