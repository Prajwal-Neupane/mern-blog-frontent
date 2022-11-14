import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    pass2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, pass2, name, email } = data;
    if (password.length < 8) {
      alert("Password length should exceed 8 characters");
    } else if (password !== pass2) {
      alert("Please confirm the password");
    } else {
      const response = await axios.post(
        "https://mern-blog-api.onrender.com/user/register",
        {
          name,
          email,
          password,
        }
      );
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/login");
      } else {
        alert("User registration failed");
      }
    }
    setData({
      name: "",
      email: "",
      password: "",
      pass2: "",
    });
  };
  return (
    <div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <input
          type="password"
          name="pass2"
          placeholder="Confirm Password"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
