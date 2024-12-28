import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  updateName,
  updatePassword,
} from "../components/feature/CustomerSlice";
import { auth } from "./firebase"; // import auth from firebase.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    dispatch(updateName(email));
    dispatch(updatePassword(password));
    navigate("/");
  }

  const username = useSelector((store) => store.customer.usernmae);

  function signin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(updateName(user.email));
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  }

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(updateName(user.email));
        navigate("/");
      })
      .catch((error) => {
        console.error("Error registering: ", error);
      });
  }

  return (
    <div className="bg-white h-screen flex flex-col items-center ">
      <div className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="w-[100px] my-5 object-contain mx-auto"
        />
      </div>
      {username === "" ? (
        <div className="w-[300px] h-fit flex flex-col rounded-md border border-gray-500 p-5">
          <h1 className="font-semibold mb-5 text-2xl uppercase text-center">
            Sign-in
          </h1>
          <form onSubmit={handleSubmit}>
            <h5 className="mb-1">E-mail</h5>
            <input
              type="text"
              placeholder="jones@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[30px] mb-2 bg-white w-full border border-stone-950 placeholder:text-xs placeholder:text-slate-600  cursor-pointer p-1.5 text-sm "
            />

            <h5 className="mb-1">Password</h5>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              className="h-[30px] mb-2 bg-white w-full border border-stone-950 placeholder:text-xs placeholder:text-slate-600  cursor-pointer p-1.5 text-sm"
            />

            <button
              type="submit"
              className="bg-[#f0c14b] border border-solid border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] rounded-[2px] w-full py-[0.5rem] mt-2"
              onClick={signin}
            >
              Sign In
            </button>
          </form>
          <p className="text-xs leading-relaxed mt-4">
            By signing-in you agree to the AMAZON APP Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button
            className="w-full h-[30px] mt-2 border border-darkgray rounded-[2px] hover:bg-slate-200 ease-in-out transition-colors duration-700 font-semibold"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </div>
      ) : (
        <Link to="/">
          <button className="bg-[#f0c14b] rounded-full w-full p-4 text-lg ">
            continue with {username}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Login;
