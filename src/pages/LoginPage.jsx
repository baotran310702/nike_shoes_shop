import React, { useEffect } from "react";
import nikeshoe from "../assets/sneaker.png";
import logo from "../assets/logo.png";

import { LoginForm } from "../components";
import { useDispatch } from "react-redux";
import { setHiddenNav } from "../app/NavbarSlice";
import { setHiddenFooter } from "../app/FooterSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHiddenNav({
        isHidden: false,
      })
    );
    dispatch(
      setHiddenFooter({
        isHidden: false,
      })
    );
  });

  return (
    <main className="flex flex-col gap-16 relative ">
      <div className="grid grid-cols-2 sm:grid-cols-1 h-auto">
        <div className="relative">
          <div className="bg-theme h-[66vh] lg:h-[65vh] sm:h-[55vh] w-full absolute top-0 left-0 ring-0 opacity-100 z-20"></div>
          <div className="h-[75vh] lg:h-[65vh] sm:h-[55vh] w-full relative z-20 grid items-end justify-items-center align-middle">
            <img
              src={logo}
              alt="logo/img"
              className={`w-48 h-auto lg:w-36 md:w-24 sm:w-16`}
            ></img>
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-slate-200 ">
              Nike Shoes Store
            </h1>
            <img
              className="w-auto h-[30vh] lg:h-[25vh] md:h-[20vh] sm:h-[15vh] xsm:h-[10vh] transition-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill transition-all duration-500 ease-in-out"
              src={nikeshoe}
              alt="sneaker"
            ></img>
          </div>
        </div>
        <div className="">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
