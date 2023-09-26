import React, { useState, useEffect } from "react";
import {
  Battery100Icon,
  BoltSlashIcon,
  CubeIcon,
  FireIcon,
  HashtagIcon,
  RocketLaunchIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [IsAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate a threshold, x px from the bottom
      const threshold = 200;

      if (scrollY + windowHeight + threshold >= documentHeight) {
        setIsAtEnd(true);
        console.log("at end");
      } else {
        setIsAtEnd(false);
        console.log("not at end");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative left-0 w-full">
        <div
          className={`${
            !IsAtEnd
              ? "fixed md:absolute grid grid-cols-1 lg:flex items-center justify-items-start w-1/5 lg:w-screen h-auto lg:h-16 md:h-12 gap-1 p-4 shadow shadow-slate-600 text-slate-800 overflow-x-scroll scroll-smooth scroll-hidden "
              : "relative grid grid-cols-1 lg:flex items-center justify-items-start w-full lg:w-screen h-auto lg:h-16 md:h-12 gap-1 p-4 shadow shadow-slate-600 text-slate-800 overflow-x-scroll scroll-smooth scroll-hidden "
          }`}
        >
          <div className="font-semibold text-xl flex justify-center items-center">
            <FireIcon className="w-6 h-6 mr-1" />
            Collections
          </div>
          <div className="side-items">
            <BoltSlashIcon className="icon-sidebar" />
            Activity Style
          </div>
          <div className="side-items">
            <SunIcon className="icon-sidebar" />
            Summer Style
          </div>
          <div className="side-items">
            <Battery100Icon className="icon-sidebar" />
            Energy Style
          </div>
          <div className="side-items">
            <RocketLaunchIcon className="icon-sidebar" />
            Trending
          </div>
          <div className="side-items">
            <CubeIcon className="icon-sidebar" />
            Sporty Style
          </div>
          <div className="side-items">
            <HashtagIcon className="icon-sidebar" />
            Fashion Style
          </div>
          <div className="font-semibold text-xl flex justify-center items-center">
            <FireIcon className="w-6 h-6 mr-1" />
            Exploring
          </div>
          <div className="side-items">
            <HashtagIcon className="icon-sidebar" />
            Fashion Style
          </div>
          <div className="side-items">
            <HashtagIcon className="icon-sidebar" />
            Fashion Style
          </div>
          <div className="side-items">
            <HashtagIcon className="icon-sidebar" />
            Fashion Style
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
