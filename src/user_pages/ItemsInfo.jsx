import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav, setStateNav } from "../app/NavbarSlice";
import { currentItemsInfor } from "../app/ItemsSlice";
import { setAddItems, getQTYandPrice } from "../app/CartSlice.js";
import toast from "react-hot-toast";

const ItemsInfo = () => {
  const dispatch = useDispatch();
  const item = useSelector(currentItemsInfor);
  const [sizeShoes, setSizeShoes] = useState(-1);

  const updateQTYandPrice = () => {
    dispatch(getQTYandPrice());
  };
  const onAddtoCart = () => {
    dispatch(setAddItems(item));
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (sizeShoes != -1) {
      onAddtoCart();
      updateQTYandPrice();
    } else {
      toast.error("You have to choose size shoes first");
    }
  };

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
    dispatch(
      setStateNav({
        navState: true,
      })
    );
  }, []);

  const mapSize = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];

  return (
    <>
      <div className="grid grid-cols-5 my-32 md:grid-cols-1">
        <div className="col-span-3 md:col-auto">
          <div className="flex justify-center items-center">
            <img
              src={item.img}
              className="w-3/5 h-auto object-fill transitions-theme hover:-rotate-12 rotate-12"
              placeholder="shoes-img"
            ></img>
          </div>
        </div>
        <div className="col-span-2 mr-12 md:col-auto md:mx-4 md:my-8">
          <div className="">
            <h1 className="font-thin text-3xl">{item.title}</h1>
            <h2 className="font-semibold">{item.text}</h2>
            <p className="mb-4">{`Rating ${item.rating}`}</p>
            <span className="font-bold text-lg">${item.price}</span>
            <div className="my-4">
              <div className="flex items-center justify-between ">
                <h1>Select Size</h1>
                <a
                  href="https://www.nike.com/vn/size-fit/womens-footwear"
                  target="_blank"
                >
                  Size Guide
                </a>
              </div>
              <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center">
                {mapSize.map((size, index) => (
                  <p
                    key={size}
                    className={`size-shoes ${
                      sizeShoes == size ? "border-slate-950" : ""
                    }`}
                    onClick={() => {
                      setSizeShoes(size);
                    }}
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="w-5/6 p-4 border border-slate-900 my-4 bg-slate-900 text-white rounded-full
              active:scale-75 transition-all duration-300 ease-in-out"
                onClick={handleAddCart}
              >
                Add to Cart
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="w-5/6 p-4 border border-slate-900 rounded-full active:scale-75 transition-all duration-300 ease-in-out">
                Favourite{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsInfo;
