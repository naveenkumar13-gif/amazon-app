import React from "react";
import Nav from "../components/nav/Nav";
import { useSelector } from "react-redux";
import CheckOutItem from "../components/checkout/CheckOutItem";
import { Link } from "react-router-dom";

function Payment() {
  const username = useSelector((store) => store.customer.username);
  const ProductCart = useSelector((store) => store.action.cart);
  const style = "flex p-5 mx-5 border-b border-solid  border-slate-400 gap-5";
  return (
    <div>
      <Nav />
      {/* container */}
      <div className=" bg-white">
        <div>
          <h1 className="text-center p-3 font-medium bg-slate-200 border border-solid border-[#dddddd] text-2xl">
            Checkout (<Link to="/checkout">{ProductCart?.length} items</Link>)
          </h1>
          <div className={style}>
            <h3 className="text-2xl font-medium">Delivery</h3>
            <div>
              <p>{username}</p>
              <p>123 React Lane </p>
              <p>usa los angles</p>
            </div>
          </div>
        </div>

        <div className={style}>
          <div className="grid ">
            <h3 className="text-2xl font-medium">Review items and delivery</h3>
          </div>
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
        </div>

        <div className={style}>
          <div>
            <h3 className="text-2xl font-medium">Payment Method</h3>
          </div>
          <div>{/* stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
