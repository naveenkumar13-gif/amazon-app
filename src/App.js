import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import PageNotFound from "./Pages/PageNotFound";
import { auth } from "./Pages/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./components/feature/ActionSlice";
import Payment from "./Pages/Payment";

function App() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      auth.onAuthStateChanged((authUser) => {
        console.log("The user is >>>", authUser);
        if (authUser) {
          dispatch(setUser(authUser.email));
          console.log("The user is >>>", authUser.email);

          console.log("The user is >>>", auth + "user");
        } else {
          dispatch(setUser(null));
          console.log("The user is >>>", auth + "user");
        }
      });
    },
    [dispatch]
  );
  return (
    <div className="bg-stone-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
