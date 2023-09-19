import React, { useEffect } from "react";
import { Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { currentCartItems, currentSumPrice } from "../app/CartSlice";
import CartItem from "../components/Cart/CartItem";

const Checkout = () => {
  const dispatch = useDispatch();
  const itemsCart = useSelector(currentCartItems);
  const subTotal = useSelector(currentSumPrice);

  return (
    <>
      <div className="">
        <Navbar isCheckout={true} />
        <div className="relative flex md:flex-col mt-16 lg:mt-16 sm:mt-12">
          <div className="grid items-center border-solid border rounded-xl px-16 py-8 lg:px-12 md:px-8 sm:px-6 w-7/12 md:w-full ">
            <div className=" ">
              <h1 className="font-bold text-slate-950 text-2xl">
                Billing Address
              </h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                  First Name
                </label>
                <input
                  className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5 mr-4 "
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                  Last Name
                </label>
                <input
                  className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5  "
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5  "
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                  Street Address
                </label>
                <input
                  className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5  "
                  type="text"
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 lg:grid-cols-1">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                    Country
                  </label>
                  <select
                    name="state"
                    defaultValue={""}
                    className="bg-gray-200 border border-gray-700 text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-900 rounded-md h-10 "
                  >
                    <option defaultValue={""}>Choose a country</option>
                    <option value="A">City A</option>
                    <option value="B">City B</option>
                    <option value="C">City C</option>
                    <option value="D">City D</option>
                    <option value="E">City E</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium text-gray-900 my-2">
                    City
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5  "
                    type="text"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12 md:w-full h-auto lg:p-12 md:p-8 sm:p-2">
            <div className="px-4 my-8 md:my-4 sm:my-2">
              <h1 className="font-bold text-slate-950 text-2xl">Your Items</h1>
            </div>
            <div className="flex flex-col h-[45vh] sm:h-[30vh] gap-y-7 lg:gap-y-5 items-start overflow-y-scroll scroll-smooth">
              {itemsCart?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
            <div className="px-4">
              <div className="flex justify-between my-4">
                <h1 className="font-semibold ">Total </h1>
                <h1 className="font-semibold bg-slate-900 text-slate-100 border rounded shadow-slate-200  ">
                  ${subTotal}
                </h1>
              </div>
              <div className="flex mt-4">
                <input
                  className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 mr-2 w-5 h-5 "
                  type="checkbox"
                />
                <label className="mb-2 text-sm font-medium text-gray-900 ">
                  {" "}
                  I agree with all{" "}
                  <a className="text-sky-800 cursor-pointer">
                    terms and policy
                  </a>
                </label>
              </div>
              <div className="flex w-full justify-center mt-4">
                <button
                  type="button"
                  className="button-theme w-3/4 bg-sky-500 font-medium text-lg h-12"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
