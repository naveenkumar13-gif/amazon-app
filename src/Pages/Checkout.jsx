import React from "react";
import Nav from "../components/Nav";
import SubTotal from "../components/SubTotal";
import { useSelector } from "react-redux";
import CheckOutItem from "../components/CheckOutItem";

function Checkout() {
  const ProductCart = useSelector((store) => store.action.cart);

  return (
    <div className="bg-stone-100 ">
      <Nav />
      {/* left */}
      <div className="flex p-5 bg-white h-max">
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="w-full mb-2"
          />
          <div>
            <h2 className="mr-2.5 p-2.5 border-b border-gray-400">
              Your Shoping Cart
            </h2>
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
        {/* right */}
        <div>
          <SubTotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
