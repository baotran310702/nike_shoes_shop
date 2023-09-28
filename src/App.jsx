import React, { useRef, useState } from "react";
import { FeatureItems, Hero, Navbar, Sales, TopStories } from "./components";
import Cart from "./components/Cart/Cart";
import { footerAPI } from "./data/data.js";
import Footer from "./components/Footer";
import { LandingPage, LoginPage, Checkout } from "./user_pages";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ListShoes from "./user_pages/ListShoes";
import ItemsInfo from "./user_pages/ItemsInfo";
import Profiles from "./user_pages/Profiles";

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
          <Route path="/list-shoes" element={<ListShoes />} />
          <Route path="/itemsInfor" element={<ItemsInfo />} />
          <Route path="/profile" element={<Profiles />} />
        </Routes>
        <Footer footerAPI={footerAPI} />
      </BrowserRouter>
    </div>
  );
};

export default App;
