import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="lg:px-32 px-5 relative box-border">
      <div className="fixed top-0 right-0  w-full z-[1000] py-[20px] text-white font-medium flex gap-4 items-center justify-center animation translate-x-full">
        <span></span>
        <button className="font-normal">Dismiss</button>
      </div>
      <div>
        <div className="container pb-5 bg-white min-h-screen">
          <Navbar />

          <div className="flex justify-center items-center py-5">
            <div className="flex-1 px-5 lg:px-10 shrink-0 ">
              <div className="w-full">
                <div className="">
                  <h1 className="text-2xl font-semibold leading-10 ">Log In</h1>
                  <form className="mt-8 space-y-4" autocomplete="off">
                    <div>
                      <div className="w-full undefined">
                        <div className="flex flex-col gap-1">
                          <label for="">Email or Phone Number</label>
                          <input
                            type="text"
                            className="!border focus:outline-none pl-2  py-3 text-sm  "
                            placeholder="email@example.com"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                          />
                          <div className=" text-[#EA526F] text-xs h-3"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full undefined">
                        <div className="flex flex-col gap-2 relative">
                          <label for="">Password (required) </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full pl-2 !border-2 py-2.5 tracking-wider"
                              name="password"
                              placeholder="password"
                              data-gtm-form-interact-field-id="0"
                            />
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute top-[2px] translate-y-[60%] w-5 h-5 text-[#7C81A0] right-3 cursor-pointer"
                              onClick={togglePasswordVisibility}
                            >
                              <path
                                d="M2.017 10.594c-.114-.18-.17-.27-.202-.408a.978.978 0 0 1 0-.372c.032-.139.088-.229.202-.408.938-1.485 3.73-5.24 7.983-5.24 4.255 0 7.046 3.755 7.984 5.24.113.18.17.27.202.408a.976.976 0 0 1 0 .372c-.032.139-.089.229-.202.408-.938 1.485-3.73 5.24-7.984 5.24s-7.045-3.755-7.983-5.24Z"
                                stroke="currentColor"
                                strokeWidth="1.667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                                stroke="currentColor"
                                strokeWidth="1.667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className=" text-[#EA526F] text-xs"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-4 text-sm">
                      <div className="text-SkyBlue font-medium cursor-pointer">
                        Forgot your password?
                      </div>
                    </div>
                    <div className="flex justify-center mt-7">
                      <button
                        className=" bg-SkyBlue text-white px-10 rounded font-medium text-lg py-2.5 flex justify-center items-center gap-1  w-full -translate-y-2"
                        type="submit"
                      >
                        <span className=" whitespace-nowrap">Login</span>
                      </button>
                    </div>
                  </form>
                  <div className="text-sm mt-2">
                    Don’t have an account?{" "}
                    <span className="text-SkyBlue cursor-pointer">
                    <Link to="/register">Create One</Link>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="flex-1 bg-[#7C81A0] h-[0.1rem]"></div>
                    <div className="text-[#7C81A0">or Continue with</div>
                    <div className="flex-1 bg-[#7C81A0] h-[0.1rem]"></div>
                  </div>
                  <button className=" flex rounded-sm px-6 justify-center py-3 w-full border border-stroke/20 items-center gap-4 font-semibold text-jet-primary mt-7 ">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#google_svg__a)">
                        <path
                          d="M39.979 20.374c0-1.639-.136-2.834-.43-4.075h-19.15v7.397h11.24c-.226 1.838-1.45 4.606-4.17 6.466l-.038.248 6.055 4.584.42.04c3.852-3.476 6.073-8.592 6.073-14.66Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M20.398 39.863c5.507 0 10.13-1.772 13.507-4.828l-6.436-4.872c-1.722 1.173-4.034 1.993-7.07 1.993a12.253 12.253 0 0 1-11.604-8.283l-.239.02-6.296 4.761-.082.224c3.354 6.511 10.243 10.985 18.22 10.985Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M8.795 23.873c-.43-1.24-.68-2.569-.68-3.942 0-1.373.25-2.701.657-3.942l-.011-.264-6.375-4.838-.208.097a19.58 19.58 0 0 0-2.176 8.947c0 3.212.793 6.245 2.176 8.947l6.617-5.005Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M20.398 7.707c3.83 0 6.414 1.616 7.887 2.967l5.756-5.492C30.506 1.971 25.905 0 20.4 0 12.42 0 5.531 4.473 2.177 10.984l6.595 5.005c1.654-4.805 6.232-8.282 11.625-8.282Z"
                          fill="#EB4335"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="google_svg__a">
                          <path fill="#fff" d="M0 0h40v40H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block relative ">
              <img
                src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauth.ac983362.png&w=640&q=75"
                alt="User-login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
