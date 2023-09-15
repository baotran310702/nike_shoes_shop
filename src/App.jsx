import React from "react";
import { FeatureItems, Hero, Sales, TopStories } from "./components";
import {
  heroapi,
  popularsales,
  topratesales,
  sneaker,
  highlight,
  story,
} from "./data/data.js";

const App = () => {
  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifPopular />
      <FeatureItems endpoint={highlight} ifPopular />
      <Sales endpoint={topratesales} />
      <FeatureItems endpoint={sneaker} />
      <TopStories endpoint={story} />
    </main>
  );
};

export default App;
