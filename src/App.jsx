import React from "react";
import { FeatureItems, Hero, Navbar, Sales, TopStories } from "./components";
import Cart from "./components/Cart/Cart";
import {
  heroapi,
  popularsales,
  topratesales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data.js";
import Footer from "./components/Footer";
import { LandingPage } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <LandingPage />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
