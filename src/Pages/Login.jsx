import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white h-screen flex flex-col items-center ">
      <div className="flex">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
            className="w-[100px] my-5 object-contain mx-auto"
          />
        </Link>
      </div>
      <div className="w-[300px] h-fit flex flex-col rounded-md border border-gray-300 p-5">
        <h1 className="font-semibold mb-5 text-2xl uppercase">Sign-in</h1>
        <form>
          <h5 className="mb-1">E-mail</h5>
          <input
            type="text"
            className="h-[30px] mb-2 bg-white w-full border border-stone-950 "
          />

          <h5 className="mb-1">Password</h5>
          <input
            type="password"
            className="h-[30px] mb-2 bg-white w-full border-stone-950"
          />

          <button
            type="submit"
            className="bg-[#f0c14b] border border-solid border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] rounded-[2px] w-full h-[30px] mt-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-xs mt-4">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="w-full h-[30px] mt-2 border border-darkgray rounded-[2px]">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
