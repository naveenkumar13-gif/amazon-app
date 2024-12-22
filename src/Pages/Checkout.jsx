import React from "react";
import Nav from "../components/Nav";
import SubTotal from "../components/SubTotal";

function Checkout() {
  return (
    <div>
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
            {/* cart Item */}
            {/* cart Item */}
            {/* cart Item */}
            {/* cart Item */}
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
