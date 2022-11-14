import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleBlog = async () => {
      const response = await axios.get(`http://localhost:3001/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(response.data);
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <img
            src={`https://mern-blog-server-api.herokuapp.com/${data.thumbnail}`}
            alt="blog"
          />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default SingleBlog;
