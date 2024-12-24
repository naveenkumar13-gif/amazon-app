import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../feature/ActionSlice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      id,
      title,
      image,
      price,
      rating,
    };
    dispatch(addCart(newItem));
  }
  return (
    <div className=" w-[90%] m-auto flex  ">
      <div className="bg-white flex justify-center flex-col  h-[500px] z-20 p-6  border boredr-solid hover:shadow-slate-900 transition  duration-500   ">
        <p className="text-xl">{title}</p>
        <div className="mt-3">
          <small>$</small>
          <strong>{price}</strong>
          <div>
            {Array(rating)
              .fill()
              .map(() => (
                <span>⭐</span>
              ))}
          </div>
        </div>
        <div className="w-[35%]  m-auto p-4 ">
          <img className="w-full " src={image} alt="" />
        </div>
        <button
          className="bg-yellow-400  border border-solid px-1  py-1  w-36 m-auto hover:bg-yellow-300 transition-colors duration-700 cursor-pointer "
          onClick={handleAddToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
