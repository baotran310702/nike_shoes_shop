import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const Items = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  console.log(color);
  console.log(shadow);
  return (
    <>
      <div
        className={`relative bg-gradient-to-b from-blue-900 to-blue-500 shadow-lg shadow-blue-500 grid items-center justify-items-center`}
      >
        <div className="grid items-center justify-items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal ">
            {text}
          </p>
          <div className="flex items-center justiy-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 text-sm">
              <h1>${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon
                className="icon-style text-slate-900  w-5 h-5
            md:w-4 md:h-4 "
              />
              <h1 className="md:text-sm font-normal">{rating}</h1>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button" className="">
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button type="button" className="">
              {btn}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img src={img} alt="img/item-img" className="" />
        </div>
      </div>
    </>
  );
};

export default Items;
