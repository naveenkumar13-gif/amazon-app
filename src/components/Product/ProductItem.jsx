import React from "react";

function ProductItem({ item }) {
  return (
    <div className="flex">
      <p>{item.title}</p>
      <p className="">
        <small>$</small>
        <strong>{item.price}</strong>
        <div>
          <img src={item.image} alt="itemImage" />
        </div>
      </p>
      <div className="flex">
        {Array(item.rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
    </div>
  );
}

export default ProductItem;
