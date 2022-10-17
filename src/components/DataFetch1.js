import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went worng");
        setPost({});
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetch1;
