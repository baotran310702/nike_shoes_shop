import React, { useEffect } from "react";
import { Navbar } from "./components";
import Cart from "./components/Cart/Cart";
import { footerAPI } from "./data/data.js";
import Footer from "./components/Footer";
import { LandingPage, LoginPage, Checkout } from "./user_pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListShoes from "./user_pages/ListShoes";
import ItemsInfo from "./user_pages/ItemsInfo";
import Profiles from "./user_pages/Profiles";
import { useDispatch } from "react-redux";
import { getStory } from "./utils/services";
import { fetchStory } from "./app/StorySlice";
import {
  fetchPopularSales,
  fetchProducts,
  fetchTopRateSales,
} from "./app/ProductSlice";

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchStory());
  dispatch(fetchPopularSales());
  dispatch(fetchTopRateSales());
  dispatch(fetchProducts());
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
