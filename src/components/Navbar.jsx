import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCart, currentQTY, setCloseCart } from "../app/CartSlice";
import {
  setStateNav,
  currentNavState,
  currentHidden,
} from "../app/NavbarSlice";
import { Link } from "react-router-dom";
import UserTippy from "./UserTippy/UserTippy";
import img from "../assets/1.png";
import ItemResult from "./utils/ItemResult";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  const isCheckout = useSelector(currentNavState);
  const isHidden = useSelector(currentHidden);

  const hideCart = () => {
    dispatch(setCloseCart(false));
    dispatch(setStateNav({ navState: false }));
  };

  const itemsQuantity = useSelector(currentQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const userIconClick = () => {
    setUser(!user);
  };
  console.log(user);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else if (isCheckout) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    setNavState(isCheckout);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, [isCheckout]);
  return (
    <>
      {isHidden && (
        <header
          className={
            !navState
              ? `absolute top-4 left-0 right-0 opacity-100 z-50`
              : `fixed top-0 left-0 right-0 h-[10vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme`
          }
        >
          <nav className="flex items-center justify-between nike-container">
            <div className="flex items-center" onClick={hideCart}>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo/img"
                  className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                ></img>
              </Link>
            </div>
            <ul className="flex items-center justify-center gap-2">
              <li className="grid items-center">
                <div className="relative">
                  <div
                    className={`flex items-center border px-2 rounded-2xl ${
                      navState && "border-slate-700"
                    }`}
                  >
                    <MagnifyingGlassIcon
                      className={`icon-style mr-1 && ${
                        navState &&
                        "text-slate-900 transition-all duration-300 "
                      }`}
                    />
                    <input
                      className={`outline-none w-56 md:w-48 sm:w-12 h-10 rounded-xl bg-transparent ${
                        navState ? "text-slate-900" : "text-slate-100"
                      } `}
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => {
                        if (e.target.value != "") {
                          setShowResult(true);
                        } else {
                          setShowResult(false);
                        }
                      }}
                    />
                  </div>
                  {showResult && (
                    <div
                      className="absolute mt-2 w-full bg-white rounded-lg "
                      onMouseLeave={() => {
                        setTimeout(() => {
                          setShowResult(false);
                        }, 1000);
                      }}
                    >
                      <ItemResult
                        img={img}
                        title={"Nike Addapt 3.0"}
                        price={"100$"}
                      />
                      <ItemResult
                        img={img}
                        title={"Nike Addapt 3.0"}
                        price={"100$"}
                      />
                      <ItemResult
                        img={img}
                        title={"Nike Addapt 3.0"}
                        price={"100$"}
                      />
                      <div className="flex justify-center align-middle">
                        <a
                          href="/list-shoes"
                          className="text-sky-700 text-xs mb-1 cursor-pointer underline "
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="grid items-center">
                <HeartIcon
                  className={`icon-style && ${
                    navState &&
                    "text-red-600 transition-all duration-300transition-all duration-300 "
                  }`}
                />
              </li>

              <li className="grid items-center">
                <button
                  type="button"
                  className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                  onClick={onCartToggle}
                >
                  <ShoppingBagIcon
                    className={`icon-style && ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                  <div
                    className={`absolute text-xs top-4 right-0 w-4 h-4 font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110
                    ${
                      navState
                        ? "text-slate-200 bg-slate-900 shadow shadow-slate-900"
                        : "bg-sky-100 text-slate-900 shadow shadow-slate-100"
                    }`}
                  >
                    {itemsQuantity}
                  </div>
                </button>
              </li>
              <li className="grid items-center">
                <UserCircleIcon
                  className={`icon-style && ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                  onClick={userIconClick}
                />
                {user && (
                  <div
                    className={`absolute ${
                      navState ? "top-14" : "top-12"
                    } right-8 md:right-4 sm:right-1 `}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setUser(!user);
                      }, 1000);
                    }}
                  >
                    <UserTippy userState={user} />
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
