import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { setAddItems, setOpenCart, getQTYandPrice } from "../../app/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Items = ({
  ifPopular,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddtoCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItems(item));
  };

  const onToggleCart = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  const updateQTYandPrice = () => {
    dispatch(getQTYandPrice());
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b from-blue-900 to-blue-500 shadow-lg shadow-blue-500 grid items-center ${
          ifPopular ? "justify-items-start" : "justify-items-center"
        } rounded-xl px-5 py-6
        transition-all duration-700 ease-in-out w-full hover:scale-105 z-20`}
        onClick={() => {
          navigate("/items/" + id);
        }}
      >
        <div
          className={`grid items-center ${
            ifPopular ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal ">
            {text}
          </p>
          <div className="flex items-center justiy-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 text-sm rounded-md mr-3 blur-effect-theme font-medium">
              <h1>${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style text-slate-100 w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => {
                onAddtoCart();
                updateQTYandPrice();
              }}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-1.5 shadow shadow-sky-200 text-sm text-black"
              onClick={() => {
                onAddtoCart();
                onToggleCart();
                updateQTYandPrice();
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifPopular ? "absolute top-5 right-2" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifPopular
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64 "
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Items;
