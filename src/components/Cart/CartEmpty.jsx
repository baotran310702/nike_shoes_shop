import React from "react";
import emptyBag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-11 gap-7 text-center">
        <img
          src={emptyBag}
          alt="emptybag/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        ></img>
        <button
          type="button"
          className="flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-125 transition-all duration-300 bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-400 shadow-lg "
          onClick={onCartToggle}
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900 " />
          <span className="">Back to Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
