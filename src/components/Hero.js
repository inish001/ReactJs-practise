import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroName}</div>;
}
export default Hero;

// this will show error for joker and our entire application crashes , we want to create a fall back UI for the particular component