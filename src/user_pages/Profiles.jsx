import React, { useEffect, useState } from "react";
import t1img from "../assets/video/t1.jpg";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PencilIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setHiddenFooter } from "../app/FooterSlice";
import { setHiddenNav, setStateNav } from "../app/NavbarSlice";
import {
  heroapi,
  popularsales,
  topratesales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "../data/data.js";
import { createProduct, createStory } from "../utils/services";
import {} from "@heroicons/react/24/solid";
import { currentUser } from "../app/UserSlice";

const Profiles = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector(currentUser);

  const addNewProd = () => {
    console.log(story.news);

    topratesales.items.forEach((item) => {
      createProduct(item);
    });
  };

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
  const [name, setName] = useState(userProfile.fullName);
  const [age, setAge] = useState(userProfile.age);
  const [dob, setDob] = useState(userProfile.dob);
  const [email, setEmail] = useState(userProfile.email);
  const [phone, setPhone] = useState(userProfile.phone);
  const [password, setPassword] = useState(userProfile.password);
  const [changePass, setChangePass] = useState(false);

  const onChangePass = () => {
    setChangePass(!changePass);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeDob = (e) => {
    setDob(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSaveChange = () => {
    addNewProd();
    toast.success("Save Change Successfully!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="grid grid-rows-2">
        <div className="grid w-full grid-cols-5 lg:grid-cols-3 md:grid-cols-1 mt-20 mb-8 sm:mx-4">
          <div className="col-span-1 lg:col-auto"></div>
          <div className="col-span-3 lg:mx-12 md:col-span-1 sm:grids sm:grid-rows-2 ">
            <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-1 md:justify-items-center">
              <div className="col-span-1">
                <div className="relative w-48 h-48 md:w-32 md:h-32">
                  <img
                    src={t1img}
                    className="h-full rounded-full object-cover "
                  ></img>
                  <div className="absolute flex items-center justify-center bg-slate-100 w-10 h-10 right-3 bottom-0 rounded-full cursor-pointer active:scale-75 transition-all duration-300">
                    <PencilIcon className="w-6 h-6 text-slate-900" />
                  </div>
                </div>
              </div>
              <div className="col-span-2 relative sm:grid-rows-1s mt-4 ">
                <button
                  className="absolute top-0 right-0 bg-sky-600 text-white px-4 py-2 rounded-xl transition-all active:scale-90"
                  onClick={onSaveChange}
                >
                  Save
                </button>
                <div className="leading-10 w-full">
                  <input
                    className="text-3xl font-semibold outline-transparent border-b focus:border-sky-800 py-2 my-2"
                    defaultValue={userProfile.fullName}
                    onChange={onChangeName}
                    readOnly={false}
                  ></input>
                  <h2>
                    Age:{" "}
                    <input
                      className="outline-transparent border-b focus:border-sky-800"
                      defaultValue={userProfile.age}
                      onChange={onChangeAge}
                      placeholder="age..."
                    ></input>
                  </h2>
                  <div>
                    Dob{" "}
                    <input
                      className="border-opacity-95 rounded-lg "
                      defaultValue={userProfile.dob}
                      type="date"
                      onChange={onChangeDob}
                    ></input>
                  </div>
                  <div>
                    Email:{" "}
                    <input
                      className="outline-transparent border-b focus:border-sky-800 "
                      defaultValue={userProfile.email}
                      onChange={onChangeEmail}
                    ></input>
                  </div>
                  <div>
                    Phone:{" "}
                    <input
                      className="outline-transparent border-b focus:border-sky-800"
                      defaultValue={userProfile.phone}
                      onChange={onChangePhone}
                    ></input>
                  </div>
                  <div>
                    Change password?{" "}
                    <a
                      className="text-sky-500 cursor-pointer"
                      onClick={onChangePass}
                    >
                      Click here!
                    </a>
                    {changePass && (
                      <div className="flex flex-col">
                        <input
                          type="password"
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8 p-2"
                          placeholder="Type old password..."
                        />
                        <input
                          type="password"
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8 p-2"
                          placeholder="Type your new password..."
                        />
                        <input
                          type="password"
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8 p-2"
                          placeholder="Rewrite new password..."
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="row-span-1 w-full">
          <div className="grid justify-items-center">
            <h1 className="text-xl mb-8 font-semibold">Purchase History</h1>
            <div className="w-full flex justify-center">
              <div className="w-3/4 md:w-full">
                <table className="text-sm text-left text-gray-50 w-full border ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                    <tr className="">
                      <th scope="col" className="px-6 py-3 w-1/4 ">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3 w-1/4 ">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 w-1/4 ">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 w-1/4 ">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="bg-white border-b ">
                      <th scope="row" className="px-6 py-4 font-medium flex ">
                        Apple MacBook Pro 17"
                      </th>

                      <td className="px-6 py-4">8</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4 flex justify-center">
                        <CheckCircleIcon className="icon-style mr-1 text-green-500" />
                        <ExclamationCircleIcon className="icon-style mr-1 text-yellow-400" />
                        <XCircleIcon className="icon-style mr-1 text-red-600" />
                        Checking
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
