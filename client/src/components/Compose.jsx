import React, { useState } from "react";

function Compose() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/compose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postTitle: title, postBody: content, postTags: tags }),
      });
      const data = await response.json();
      console.log(data);
      alert("Blog post created successfully");
      setTitle("");
      setContent("");
      setTags("");
    } catch (error) {
      console.error(error);
      alert("Error creating blog post");
    }
  };

  return (
    <div className="container my-4">
      <h1>Create a new blog post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="6"
            placeholder="Enter post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create post
        </button>
      </form>
      <br /><br />
    </div>
  );
}

export default Compose;