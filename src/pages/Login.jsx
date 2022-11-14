import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://mern-blog-server-api.herokuapp.com/user/login",
      data
    );
    // if (
    //   response.data === "User not registered" ||
    //   response.data === "Wrong password"
    // ) {
    //   alert(response.data);
    // } else {
    alert("User logged in Successfully");
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.user.name);
    navigate("/");

    // console.log(response.data.user.name);
    // console.log(response.data.token);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="registerForm" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
