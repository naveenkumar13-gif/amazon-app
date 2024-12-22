import React from "react";

function SubTotal() {
  return <div></div>;
}

export function formatCurrency(value, currencyCode = "USD") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
  }).format(value);
}

export default SubTotal;
