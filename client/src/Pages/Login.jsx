import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Contexts/UserContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser, token, setToken } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    console.log(email, password);

    // Display the values of formData
    for (const value of formData.values()) {
      console.log(value);
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = res.data;

      // Store the token in local storage
      localStorage.setItem("token", token);
      setToken(token);

      // Store the JSON string in localStorage under a key (e.g., 'user')
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Get user info from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);

      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "Email is not exists"
      ) {
        toast.error("Email is not exists");
        setEmail("");
        setPassword("");
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error === "Email or Password is wrong"
      ) {
        toast.error("Email or Password is wrong");
        setEmail("");
        setPassword("");
      } else {
        toast.error("Internal Server Error");
      }
    }
  };

  return (
    <>
      <div id="form">
        <h3>Login</h3>
        <p>Enter Login details to get access</p>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>Username Or Email Address</label>
            <br />
            <input 
               type="email" 
               placeholder='Enter Email Address'
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
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Don't have an account?
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span> Register </span>
            </Link>
            here
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
