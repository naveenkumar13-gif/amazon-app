import React from "react";
import logo from "../Image/Amazon-Logo.jpg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <li className="w-[100px] cursor-pointer object-contain ">
          <img src={logo} alt="logo" className="w-full h-full" />
        </li>
      </Link>
    </div>
  );
}

export default Logo;
