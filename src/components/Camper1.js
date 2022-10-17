import React, {  useMemo, useState } from "react";

function Camper1() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      counter One - {counterOne}
      <button onClick={incrementOne}>Increment Counter One</button>
      {isEven ? "even" : "odd"}
      <br />
      <br />
      counter Two - {counterTwo}
      <button onClick={incrementTwo}>Increment Counter Two</button>
    </div>
  );
}

export default Camper1;
