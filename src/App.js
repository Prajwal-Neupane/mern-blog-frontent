import React from "react";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./services/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/add/blog" element={<AddBlog />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
