import React, { useEffect } from "react";
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
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav } from "../app/NavbarSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      setHiddenFooter({
        isHidden: true,
      })
    );
    dispatch(
      setHiddenNav({
        isHidden: true,
      })
    );
  }, []);
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
