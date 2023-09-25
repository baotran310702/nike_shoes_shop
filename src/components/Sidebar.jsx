import React from "react";
import {
  Battery100Icon,
  BoltSlashIcon,
  CubeIcon,
  FireIcon,
  HashtagIcon,
  RocketLaunchIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import flower from "../assets/flower.svg";

const Sidebar = () => {
  return (
    <>
      <div className="relative left-0 top-10 ">
        <div className="fixed lg:absolute grid grid-cols-1 lg:flex items-center justify-items-start w-1/5 lg:w-screen h-3/4 lg:h-16 md:h-12 gap-1 mt-12 p-2 shadow shadow-slate-600 text-slate-800 text-sm md:text-xs overflow-x-scroll scroll-smooth scroll-hidden">
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
