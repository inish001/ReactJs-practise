import React, { useEffect } from "react";
import { useState } from "react";
import BlogsLists from "./BlogsLists";

const List = () => {
    // const [blogs, setBlogs] = useState([
    //   { title: "sjs", author: "sjhsa", id: 1 },
    //   { title: "sj", author: "sjsa", id: 2 },
    //   { title: "sjgs", author: "sjha", id: 3 },
    // ]);

  // for fetching using useEffect
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("mario");
    const deleteHandler = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newblogs);
  };

  // using use effect hook
  //   useEffect(() => {
  //     console.log("use effect runs");
  //     // this function is running everytime screen renders
  //   });

  // useeffect dependencies
  // useEffect(()=>{
  //     console.log("useeffect runs")
  // },[name])

  // useeffect Fetching data
  useEffect(() => {
    fetch(" http://localhost:8000")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
     {blogs&& <BlogsLists    // {blogs && <blogslist short circuit operator so that null didnt pass into the map method}
        blogs={blogs}
        title="All Blogs"
        deleteHandler={deleteHandler}
      />}
      {/* <BlogsLists
        blogs={blogs.filter((blog) => blog.id === 1)}
        title="Blogs with id1"
      />{" "} */}
      {/*  change id --for showing all blogs having id 1 */}

      {/* for use effect */}
      {/* {name}
      <button
        onClick={() => {
          setName("luigi");
        }}
      >
        Change Name!
      </button> */}
      <useFetch/>
    </div>
  );
};
export default List;
