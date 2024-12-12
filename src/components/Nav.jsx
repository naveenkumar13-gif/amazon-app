import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const SpanStyle =
  "flex flex-col items-center hover:text-stone-500 transition-all duration-300";
function Nav() {
  return (
    <div className="flex justify-between items-center bg-[#040406]  gap-8  px-4 py-2 sticky top-0 z-50">
      <ul>
        <li>
          <Logo />
        </li>
      </ul>

      <ul className="flex justify-between items-center text-white flex-grow ">
        <input
          type="text"
          placeholder="search"
          className=" w-[100%]  transition-all duration-300 border-none  placeholder:text-stone-500 focus:ring
            px-4 py-2 hover:bg-stone-200 focus:outline-none 
           "
        />
        <IoIosSearch className="bg-orange-400  hover:bg-orange-500 h-[40px] w-[50px] text-blue-950" />
      </ul>

      <ul className="flex items-center text-white gap-4 max-md:hidden">
        <Link to="/login">
          <div className={SpanStyle}>
            <span className="text-[10px] text-stone-400 ">Hello</span>
            <span className="text-lg">sign In </span>
          </div>
        </Link>
        <li>
          <Link to="/">
            <div className={SpanStyle}>
              <span className="text-[10px]  text-stone-400   ">Return</span>
              <span className="">Orders</span>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className={SpanStyle}>
              <span className="text-[10px] text-stone-400  ">Your</span>
              <span className="">Prime</span>
            </div>
          </Link>
        </li>
        <Link
          to="/checkout"
          className="flex text-2xl items-center gap-1 hover:text-stone-500 transition-all duration-500 "
        >
          <MdOutlineLocalGroceryStore />
          <span className="text-sm">0</span>
          <div></div>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
