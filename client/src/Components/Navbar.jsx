import React, { useContext, useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [dropdown, setDropDown] = useState(false);

  return (
    <>
      <div className="topNav">
        <div>
          <p>About</p>
          <p>Privacy</p>
          <p>FAQ</p>
          <p>Careers</p>
        </div>
        <div>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <header>
        <img src="Images/logo.png" alt="logo" className="logo" />
        <nav>
          <Link to="/">
            <a href="#">Home</a>
          </Link>
          <Link to="/products/mens">
            <a href="#">Mens</a>
          </Link>
          <Link to="/products/womens">
            <a href="#">Womens</a>
          </Link>
          <Link to="/products/kids">
            <a href="#">Kid's Collection</a>
          </Link>

          {user ? (
            ""
          ) : (
            <Link to="/login">
              <a href="#">Login</a>
            </Link>
          )}
        </nav>
        <div className="rightNav">
          <img src="Images/search.png" alt="search" />
          {/* <Link to="/profile"> */}
          <div class="dropdown">
            <img
              src="Images/user.png"
              alt="profile"
              onClick={() =>
                setDropDown((prev) => {
                  setDropDown(!prev);
                })
              }
            />
            <div
              id="dropDownBox"
              style={dropdown ? { display: "block" } : { display: "none" }}
            >
              {user ? (
                <>
                  <Link to="/user/profile" onClick={()=> setDropDown(false)}><p>My Account</p></Link>
                  <button>Logout</button>
                </>
              ) : (
                <>
                  <p>Login</p>
                  <button>Register</button>
                </>
              )}
            </div>
          </div>
          {/* </Link> */}
          <div style={{ position: "relative" }}>
            <img src="Images/cart.png" alt="cart" />
            <span className="badge">0</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
