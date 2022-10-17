import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: false,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_success":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "Fetch_failure":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};
function DataFetch2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "Fetch_success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Fetch_failure" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetch2;
