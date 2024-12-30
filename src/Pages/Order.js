import React, { use, useEffect, useState } from "react";
import Nav from "../components/nav/Nav";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import CheckOutItem from "../components/checkout/CheckOutItem";

function Order() {
  const ProductCart = useSelector((store) => store.action.cart);

  return (
    <div>
      <Nav />
      <div>
        <h1>Order Page</h1>
        <h2>Thank you for your order</h2>
        <div>
          {ProductCart.map((item) => (
            <CheckOutItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={item.id}
            />
          ))}
        </div>

        {/* <p>
          Your order has been placed successfully. We will send you an email
          with your order details and delivery date. Thank you for shopping with
          us.
        </p> */}
      </div>
    </div>
  );
}

export default Order;
