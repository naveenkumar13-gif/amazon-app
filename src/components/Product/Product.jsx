import React from "react";
import ProductItem from "./ProductItem";
import Image1 from "../../Image/Amazon-Logo.jpg";
import Image2 from "../../Image/OIP.jpg";
import Image3 from "../../Image/header.jpg";

function Product() {
  const product = [
    {
      id: "12122",
      title: "natiion ",
      price: "45",
      image: Image1,
    },
    {
      id: "1222",
      title: "natiion ",
      price: "45",
      image: Image2,
    },
    {
      id: "122",
      title: "natiion ",
      price: "45",
      image: Image3,
    },
  ];
  return (
    <div className="bg-green-400">
      {product.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
}

export default Product;
