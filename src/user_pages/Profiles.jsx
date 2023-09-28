import React, { useEffect, useState } from "react";
import t1img from "../assets/video/t1.jpg";
import { PencilIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const Profiles = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
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
                  <div className="absolute flex items-center justify-center bg-slate-400  w-12 h-12 right-3 bottom-0 rounded-full cursor-pointer hover:scale-90 transition-all duration-300">
                    <PencilIcon className="w-8 h-8 text-slate-300" />
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
                    className="text-3xl font-semibold"
                    defaultValue={"Lee Sang Hyeok"}
                    onChange={onChangeName}
                    readOnly={false}
                  ></input>
                  <h2>
                    Age{" "}
                    <input defaultValue={"27"} onChange={onChangeAge}></input>
                  </h2>
                  <div>
                    Dob{" "}
                    <input
                      defaultValue={"2000-01-01"}
                      type="date"
                      onChange={onChangeDob}
                    ></input>
                  </div>
                  <div>
                    Email:{" "}
                    <input
                      defaultValue={"leesanghyeok@gmail.com"}
                      onChange={onChangeEmail}
                    ></input>
                  </div>
                  <div>
                    Phone:{" "}
                    <input
                      defaultValue={"0999 xxx xxx"}
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
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8"
                          placeholder="  Type old password..."
                        />
                        <input
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8"
                          placeholder="  Type your new password..."
                        />
                        <input
                          className="border mb-4 border-slate-700 rounded-md text-sm w-1/2 h-8"
                          placeholder="  Rewrite new password..."
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
        <div className="row-span-1 flex  justify-center items-start">
          <div className="grid justify-items-center">
            <h1 className="text-xl">Purchase History</h1>
            <h1 className="text-sm">
              No transaction was made from this acccount
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
