import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const handleSubmit = (e) => {
    e.preventDefault();
    let blog = { title, body, author };
    console.log(blog);
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

export default Create;
