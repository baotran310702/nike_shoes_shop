import React from "react";
import { FeatureItems, Hero, Sales, TopStories } from "../components";
import {
  heroapi,
  popularsales,
  topratesales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "../data/data.js";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setStateNav } from "../app/NavbarSlice";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifPopular />
        <FeatureItems endpoint={highlight} ifPopular />
        <Sales endpoint={topratesales} />
        <FeatureItems endpoint={sneaker} />
        <TopStories endpoint={story} />
      </main>
    </>
  );
};

export default LandingPage;
