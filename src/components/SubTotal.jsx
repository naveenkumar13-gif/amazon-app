import React from "react";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <>
      <div className="flex flex-col justify-between w-[300px] h-[110px] p-4  bg-[#f3f3f3] border border-solid border-[#dddddd]">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal (0 items): <strong>0</strong>
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

        <button className="w-full h-[30px] mt-2 bg-[#f0c14b] rounded-[2px] border border-solid border-[#a88734] text-[#111]">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
}

export default SubTotal;
