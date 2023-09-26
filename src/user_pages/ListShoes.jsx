import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav, setStateNav } from "../app/NavbarSlice";
import Sidebar from "../components/Sidebar";
import { Sales } from "../components";
import { topratesales } from "../data/data";
import Items from "../components/utils/Items";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const ListShoes = () => {
  const [arrow, setArrow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
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
    dispatch(
      setStateNav({
        navState: true,
      })
    );
  }, []);
  console.log(topratesales);

  return (
    <>
      <div className="mt-[10vh]">
        <div className="grid grid-cols-5 lg:grid-cols-1">
          <div className="col-span-1 lg:col-span-1 w-full">
            <Sidebar />
          </div>
          <div className="col-span-4 lg:col-span-1 lg:mt-20 p-4 md:mt-12 sm:mt-8">
            <div>
              <div className="relative">
                <div
                  className="m-4 flex items-center cursor-pointer"
                  onClick={() => {
                    setArrow(!arrow);
                  }}
                  onBlur={() => {
                    setArrow(false);
                  }}
                >
                  <p>Category</p>
                  {arrow ? (
                    <ArrowUpIcon className="w-6 h-6 ml-1" />
                  ) : (
                    <ArrowDownIcon className="w-6 h-6 ml-1" />
                  )}
                </div>
                <div
                  className={`${
                    arrow ? "visible" : "invisible"
                  } absolute top-6 left-0 bg-white shadow-sm  rounded-lg ml-4 z-50 cursor-pointer`}
                  onMouseLeave={() => {
                    setArrow(false);
                  }}
                >
                  <div className="m-2 hover:bg-slate-400 rounded-lg p-2">
                    Price: High - Low
                  </div>
                  <div className="m-2 hover:bg-slate-400 rounded-lg p-2">
                    Price: Low - High
                  </div>
                  <div className="m-2 hover:bg-slate-400 rounded-lg p-2">
                    Top Sales
                  </div>
                  <div className="m-2 hover:bg-slate-400 rounded-lg p-2">
                    Featured
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:gap-3 mt-7`}
                >
                  {topratesales.items?.map((item, i) => (
                    <Items {...item} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListShoes;
