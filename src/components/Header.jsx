import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  return (
    <div className="headerContainer">
      <div className="navItems">
        {token && token !== null ? (
          <div>
            <h1>Welcome {name}</h1>
            <button onClick={handleLogOut}>Log OUt</button>
          </div>
        ) : (
          <>
            <Link to={"/login"}>
              <p>Login </p>
            </Link>
            <Link to={"/register"}>
              <p>Register</p>
            </Link>
          </>
        )}

        <Link to={"/add/blog"}>
          <p>Add Blog</p>
        </Link>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
