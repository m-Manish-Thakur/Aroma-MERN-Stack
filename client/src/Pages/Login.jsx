import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div id="form">
        <h3>Login</h3>
        <p>Enter Login details to get access</p>
        <form action="#">
          <div>
            <label>Username Or Email Address</label>
            <br />
            <input type="email" placeholder="Enter Email Address" />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter Password" />
          </div>
          <p>
            Don't have an account?
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span> Register </span>
            </Link>
            here
          </p>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
