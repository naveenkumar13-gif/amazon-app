import React from "react";
import Nav from "../components/Nav";
import HeaderImage from "../Image/header.jpg";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="w-[90%] m-auto ">
        <img src={HeaderImage} alt="heraderImage" className="w-full" />
      </div>
    </>
  );
}

export default HomePage;
