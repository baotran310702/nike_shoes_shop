import React from "react";
import { Navbar } from "../components";

const Checkout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="relative flex flex-col mt-24 lg:mt-20 sm:mt-16">
          <div className="grid items-center mx-[24vh] border-solid border rounded-xl">
            <div className="my-5 ">
              <h1 className="font-bold text-slate-950">Billing Address</h1>
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
                  First Name
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
                  First Name
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
                    Select Country
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
            <div className="flex mt-4">
              <input
                className="bg-gray-100 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 mr-2 w-5 h-5 "
                type="checkbox"
              />
              <label className="mb-2 text-sm font-medium text-gray-900 ">
                {" "}
                I agree with all{" "}
                <a className="text-sky-800 cursor-pointer">terms and policy</a>
              </label>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Checkout;
