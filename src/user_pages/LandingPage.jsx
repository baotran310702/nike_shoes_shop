import React, { useEffect } from "react";
import { FeatureItems, Hero, Sales, TopStories } from "../components";
import { heroapi, sneaker, highlight } from "../data/data.js";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav } from "../app/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { currentPopularSales, currentTopRateSales } from "../app/ProductSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const popularSalesData = useSelector(currentPopularSales);

  const topRateSales = useSelector(currentTopRateSales);

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
        <Sales ifPopular items={popularSalesData} />
        <FeatureItems endpoint={highlight} ifPopular />
        <Sales items={topRateSales} />
        <FeatureItems endpoint={sneaker} />
        <TopStories />
      </main>
    </>
  );
};

export default LandingPage;
