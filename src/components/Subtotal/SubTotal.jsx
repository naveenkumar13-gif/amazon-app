import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function SubTotal() {
  const Addcart = useSelector((store) => store.action.cart);
  const Price = useSelector((store) =>
    // ------------ store --> action == actionSlice----cart
    store?.action?.cart.reduce((amount, item) => amount + item.price, 0)
  );
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/payment");
  }
  return (
    <>
      <div className="flex flex-col justify-between w-[300px] h-[110px] p-4  bg-[#f3f3f3] border border-solid border-[#dddddd]">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework -----  completed */}
                Subtotal ({Addcart.length} items): <strong>{Price}</strong>
              </p>
              <small className=" flex items-center gap-1">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button
          className="w-full h-[30px] mt-2 bg-[#f0c14b] rounded-[2px] border border-solid border-[#a88734] text-[#111]"
          onClick={handleNavigate}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
}

export default SubTotal;
