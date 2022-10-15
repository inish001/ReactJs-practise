import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div> count -{count}</div>
      <div> countTwo -{countTwo}</div>
      <button onClick={() => dispatch("increment")}>Increment1</button>
      <button onClick={() => dispatch("decrement")}>Decrement1</button>
      <button onClick={() => dispatchTwo("increment")}>Increment2</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement2</button>
      <button onClick={() => dispatch("Reset")}>Reset1</button>
      <button onClick={() => dispatchTwo("Reset")}>Reset2</button>
    </div>
  );
}

export default Counter3;
