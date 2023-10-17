import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await axios.post(
        "http://localhost:8000/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Register Successfully Login Now");
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "User already exists"
      ) {
        toast.error("Username already exists");
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        toast.error("Internal Server Error");
      }
    }
  };

  return (
    <>
      <div id="form">
        <h3>Register</h3>
        <p>Create your account to get full access</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email Address</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>{" "}
            here
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
