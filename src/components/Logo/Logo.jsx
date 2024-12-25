import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <li className="w-[100px] cursor-pointer object-contain mx-5 mt-5 ">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="w-full h-full"
          />
        </li>
      </Link>
    </div>
  );
}

export default Logo;
