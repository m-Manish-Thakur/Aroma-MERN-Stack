import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div id="form">
        <h3>Register</h3>
        <p>Create your account to get full access</p>
        <form action="#">
          <div>
            <label>Full Name</label>
            <br />
            <input type="text" placeholder="Enter Full Name" />
          </div>
          <div>
            <label>Email Address</label>
            <br />
            <input type="email" placeholder="Enter Email Address" />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter Password" />
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link> here
          </p>
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
