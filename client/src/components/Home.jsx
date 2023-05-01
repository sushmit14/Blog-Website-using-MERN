import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./styles.css"
import axios from "axios";

const homeStartingContent = "Welcome to our blog, your ultimate source for the latest updates in the field of machine learning and deep learning. As the world becomes increasingly digitized, these technologies have become integral to many industries, including healthcare, finance, and transportation. Our team of experts is dedicated to keeping you informed about the latest trends, breakthroughs, and advancements in the field, with in-depth analysis, comprehensive guides, and engaging tutorials. Whether you're a seasoned professional or just starting out, our blog is the perfect destination for anyone who wants to stay on the cutting edge of machine learning and deep learning.";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:4000/posts").then((res) => {
        setPosts(res.data);
      });
    }, []);

    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:4000/posts/${id}/delete`, {
          method: "POST",
        });
        setPosts(posts.filter((post) => post._id !== id));
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="container-fluid">
        <h1>Discovering the Future of Machine Learning and Deep Learning: Stay Up-to-Date with the Latest Trends, Breakthroughs, and Insights</h1>
        
        <p>
          {homeStartingContent}
        </p>
        {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          {post.content && (
            <p>
              {post.content.substring(0, 450) + "..."}
              <Link to={'http://localhost:4000/posts/' + post._id}>Read More</Link>

              <br />
              <br />
              tags: {post.tags} 
              <br /><br />
              <button className="btn btn-secondary" onClick={() => handleDelete(post._id)}>
                Delete
              </button>
            </p>
          )}
        </div>
      ))}
      <br />
        <Link className="btn btn-primary right-align" to="/Compose">Compose new blog</Link>        
      </div>
    );
  }
export default Home;