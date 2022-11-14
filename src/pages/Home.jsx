import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        "https://mern-blog-api.onrender.com/blog",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBlogData(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogData && blogData.length > 0 ? (
        blogData.map((blogs) => {
          return (
            <div key={blogs._id}>
              <h1>{blogs.title}</h1>
              <img
                alt="blog thumbnail"
                src={`http://localhost:3001/${blogs.thumbnail}`}
              />
              <p>{blogs.description}</p>
              <Link to={`/blog/${blogs._id}`}>
                <button>ReadMore</button>
              </Link>
            </div>
          );
        })
      ) : (
        <div>
          <h1>No Blogs Available</h1>
          <h5>Want to create some??</h5>
          <Link to={"/add/blog"}>
            <button>Add Blog</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
