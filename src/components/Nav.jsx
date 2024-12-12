import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

function Nav() {
  return (
    <div className="flex justify-evenly items-center bg-[#040406]  gap-8  px-4">
      <ul>
        <li>
          <Logo />
        </li>
      </ul>

      <ul className="flex  items-center text-white   bg-orange-600 w-full ">
        <input
          type="text"
          placeholder="search"
          className="w-full border-none "
        />
        <IoIosSearch className="m-1" />
      </ul>

      <ul className="flex items-center text-white gap-2">
        <Link to="/">
          <div className="flex flex-col gap-0">
            <span className="text-[10px] text-stone-400 ">Hello</span>
            <span className="">sign</span>
          </div>
        </Link>
        <li>
          <Link to="/login">
            <div className="flex flex-col">
              <span className="text-[10px]  text-stone-400">Return</span>
              <span className="">&Orders</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <div className="flex flex-col">
              <span className="text-[10px] text-stone-400 ">Your</span>
              <span className="">Prime</span>
            </div>
          </Link>
        </li>
        <li className="text-lg">
          <MdOutlineLocalGroceryStore />
          <div></div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
