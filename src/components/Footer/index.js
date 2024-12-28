import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="mb-2">
        <a
          href="https://www.amazon.com/gp/help/customer/display.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Help
        </a>
        <a
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Shipping & Returns
        </a>
        <a
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Privacy Notice
        </a>
        <a
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Terms of Use
        </a>
      </div>
      <div>&copy; 2023, Amazon.com, Inc. or its affiliates</div>
    </footer>
  );
};

export default Footer;
