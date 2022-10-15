
import useFetch from "./useFetch";
import BlogsLists from "./BlogsLists";

const Home1 = () => {
  const { data, isPending, error } = useFetch(" http://localhost:8000/posts");  // /posts for endpoints
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>loading</div>}
      {/* {blogs && <BlogsLists blogs={blogs} title="All Blogs" />} */}
    </div>
  );
};
export default Home1;
