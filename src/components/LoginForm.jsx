import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { authen, login } from "../utils/services";

function LoginForm() {
  const [userName, setUsername] = useState("");
  const [regexEmail, setRegexEmail] = useState(true);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //Validate Username
  const handleRegex = (e) => {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(userName)) {
      setRegexEmail(true);
    } else {
      setRegexEmail(false);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(userName);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const loginEvent = async () => {
    //handle logic author - authen
    console.log(userName, password);

    login(userName, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((res) => {
        alert("username or password failed");
      });
  };

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    authen(currentToken)
      .then((res) => {
        navigate("/");
      })
      .catch((res) => {
        localStorage.removeItem("token");
      });
  }, []);

  return (
    <section className="bg-theme h-[66vh] lg:h-[65vh]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="name@company.com"
                  required=""
                  value={userName}
                  onChange={handleUsername}
                  onBlur={handleRegex}
                />

                <div
                  className={`flex justify-center ${
                    regexEmail ? "hidden" : ""
                  }`}
                >
                  <div className="absolute px-3 py-2 my-1 transitions-shake text-xs font-medium flex justify-center items-center text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm">
                    <ExclamationCircleIcon className="w-5 h-5 mr-1" />
                    <p>
                      {" "}
                      Invalid email address, email must contain '@' and domain
                      must exist.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                onClick={loginEvent}
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign In
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
