import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import { useSelector } from "react-redux";
import CheckOutItem from "../components/checkout/CheckOutItem";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const username = useSelector((store) => store.customer.username);
  const ProductCart = useSelector((store) => store.action.cart);
  const Price = useSelector((store) =>
    // ------------ store --> action == actionSlice----cart
    store?.action?.cart.reduce((amount, item) => amount + item.price, 0)
  );
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const style = " p-5 mx-5 gap-5";

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);
    // const payload = await stripe
  }
  function handleChange(e) {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <div>
      <Nav />
      {/* container */}
      <div className=" bg-white">
        <div>
          <h1 className="text-center p-3 font-medium bg-slate-200  text-2xl">
            Checkout (<Link to="/checkout">{ProductCart?.length} items</Link>)
          </h1>
          <div className="border-b border-solid border-[#dddddd]  p-5 mx-5 ">
            <h3 className="text-2xl font-medium">Delivery</h3>
            <div>
              <p>{username}</p>
              <p>123 React Lane </p>
              <p>usa los angles</p>
            </div>
          </div>
        </div>

        <div className={style}>
          <div>
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

        <div className=" flex flex-col p-5 w-1/2 m-auto">
          <div>
            <h3 className="text-2xl font-medium">Payment Method</h3>
          </div>
          <div>
            {/* stripe */}
            <form onSubmit={handleSubmit}>
              <div>
                <CardElement onChange={handleChange} className=" p-2" />
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {Price}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <button
                disabled={processing || disabled || succeeded}
                className="bg-[#f0c14b] border-none p-2 rounded-lg w-full mt-2"
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </form>
          </div>
          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default Payment;
