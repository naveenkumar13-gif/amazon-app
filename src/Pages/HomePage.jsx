import React from "react";
import Nav from "../components/Nav";
import HeaderImage from "../Image/header.jpg";
import Product from "../components/Product/Product";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="w-[90%] m-auto ">
        <img src={HeaderImage} alt="heraderImage" className="w-full" />
      </div>
      <Product />
    </>
  );
}

export default HomePage;
