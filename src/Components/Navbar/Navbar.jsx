import React from "react";

import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-white z-50 shadow-sm sticky top-0 ">
      <div className=" flex justify-between items-center lg:px-32 px-5 py-3 shadow-sm ">
        <Link to="/">
          <img
            src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-name.e436e18b.png&w=256&q=75"
            alt="logo"
          />
        </Link>

        <div className=" lg:flex hidden  items-center gap-10 text-normalSize tracking-wider font-medium text-base ">
          <div>
            <Link to="/medhavhi/login">Login</Link>
          </div>
          <div className=" px-8 py-3 shadow-sm text-primaryColor rounded-sm ">
            <Link to="/medhavhi/register">Sign Up</Link>
          </div>
        </div>

        <div className=" flex lg:hidden text-mediumSize">
          <VscThreeBars />
        </div>
      </div>
    </div>
  );
}
