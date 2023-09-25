import React from "react";

import { VscThreeBars } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className=" bg-white z-50 shadow-sm sticky top-0 ">
      <div className=" flex justify-between items-center lg:px-32 px-5 py-3 shadow-sm ">
        <img
          src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-name.e436e18b.png&w=256&q=75"
          alt="logo"
        />
        <div className=" lg:flex hidden  items-center gap-10 text-normalSize tracking-wider font-medium text-base ">
          <div>Login</div>
          <div className=" px-8 py-3 shadow-sm text-primaryColor rounded-sm ">
            Sign Up
          </div>
        </div>

        <div className=" flex lg:hidden text-mediumSize">
          <VscThreeBars />
        </div>
      </div>
    </div>
  );
}
