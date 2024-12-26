import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../feature/ActionSlice";

function CheckOutItem({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  // function handleRemove() {
  //   dispatch(removeCart(id));
  // }
  return (
    <div className="flex p-4  border-b border-solid border-[#dddddd] items-center">
      <div className="w-[15%]   p-4 ">
        <img src={image} alt={image} className="w-full" />
      </div>
      <div className="w-[50%]  p-4 ">
        <p className="text-lg leading-relaxed">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </div>
        <button
          className="bg-yellow-400 border px-1 py-1 rounded-lg border-none w-36 m-auto hover:bg-yellow-300 transition-colors duration-700 cursor-pointer mt-4 focus:ring-yellow-500 focus:ring-2 "
          onClick={() => dispatch(removeCart(id))}
        >
          Delete Cart
        </button>
      </div>
    </div>
  );
}

export default CheckOutItem;
