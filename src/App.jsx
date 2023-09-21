import React from "react";
import { FeatureItems, Hero, Navbar, Sales, TopStories } from "./components";
import Cart from "./components/Cart/Cart";
import { footerAPI } from "./data/data.js";
import Footer from "./components/Footer";
import { LandingPage, LoginPage } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <LandingPage />
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
