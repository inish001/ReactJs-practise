import { useState } from "react";

// form for posting method
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const handleSubmit = (e) => {
    e.preventDefault();
    let blog = { title, body, author };
    console.log(blog);
    
    fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    }).then(() => {
        console.log("New Blog added");
    });
};
  return (
    <div>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        Blog Title:{" "}
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Blog Body:{" "}
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        Author:
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="stanlee">stanlee</option>
        </select>
        <button>Add</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default PostCreate;
