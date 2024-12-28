import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";

const SpanStyle =
  "flex flex-col items-center hover:text-stone-500 transition-all duration-300";
function Nav() {
  const inputRef = useRef(null);
  useEffect(function () {
    inputRef.current.focus();
  }, []);

  // -------------------------------- store --> action == actionSlice----cart
  const username = useSelector((store) => store.customer.username);
  const AddTocart = useSelector((store) => store.action.cart);
  return (
    <div className="flex justify-evenly items-center bg-[#131921]  h-[60px]  px-4 py-2 sticky top-0 z-50 gap-4">
      <ul>
        <li>
          <Logo />
        </li>
      </ul>

      <div className="flex justify-between items-center flex-grow ">
        <input
          type="text"
          placeholder="search"
          ref={inputRef}
          className=" w-[100%]  transition-all duration-300 border-none  placeholder:text-stone-500 focus:ring
            px-4 py-2 hover:bg-stone-200 focus:outline-none 
           "
        />
        <IoIosSearch className="bg-[#cd9042]  hover:bg-orange-500 h-[40px] w-[50px] text-blue-950 transition-colors duration-300" />
      </div>

      <ul className="flex items-center text-white gap-4 max-md:hidden">
        <li>
          <Link to="/login">
            <div className={SpanStyle}>
              <p className="text-[10px] text-stone-400 ">
                {username ? username : "Hello Guest"}
              </p>
              <span className="text-lg">
                {username ? "sign Out" : "sign In "}
              </span>
            </div>
          </Link>
        </li>
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
          <span className="text-sm">{AddTocart?.length}</span>
          <div></div>
        </Link>
      </ul>
    </div>
  );
}
export function Banner() {
  return (
    <div className="w-[95%] m-auto -z-10 -mb-36  mask-gradient-to-bottom">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="heraderImage"
        className=" w-full  "
      />
    </div>
  );
}

export default Nav;
