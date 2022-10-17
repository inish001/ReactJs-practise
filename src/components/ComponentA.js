import React, { useReducer } from "react";
import ComponentB from "./ComponentB";
import ComponentC1 from "./ComponentC1";

export const CountContext = React.createContext();
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

function ComponentA() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
      <div>count -{count}</div>
      <ComponentB/>
      <ComponentC1/>
    </CountContext.Provider>
  );
}

export default ComponentA;
