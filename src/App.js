import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import PageNotFound from "./Pages/PageNotFound";
import Order from "./Pages/Order";
import { auth } from "./Pages/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./components/feature/ActionSlice";
import Payment from "./Pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QbLkuPwzOckrqyVu96Mf6b9eEkCD5ise3j7BJQVrsozQzlYnwkDrsHdpLsIuYZn2LlvR3CCFRj9OPNO1m7sOUMx004QS3YTgG"
);

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
          <Route path="/order" element={<Order />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
