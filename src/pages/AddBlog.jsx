import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };
  const [file, setFile] = useState([]);
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("description", blogData.description);
    formData.append("thumbnail", file);

    const response = await axios.post(
      "https://mern-blog-server-api.herokuapp.com/blog/add",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    navigate("/");
  };
  return (
    <div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
        />
        <br /> <br />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description"
        ></textarea>{" "}
        <br />
        <br />
        <input type="file" name="thumbnail" onChange={handleFileUpload} />{" "}
        <br /> <br />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
