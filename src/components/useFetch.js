// creating a custom hook for fetching method in the Home1.js

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url) // url of the server for fetching the api
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((e) => {
        setPending(true);
        setError(e.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

// import this file into the list file and include tag in the return  i dont have any server api link to check for now
