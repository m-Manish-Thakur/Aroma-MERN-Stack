import React from "react";
import "./Style.css";

const Navbar = () => {
  return (
    <>
    <div className ='topNav'>
              <div>
                    <p>About</p>
                    <p>Privacy</p>
                    <p>FAQ</p>
                    <p>Careers</p>
              </div>
              <div>
                  <i className ="fa-brands fa-facebook"></i>
                  <i className ="fa-brands fa-instagram"></i>
                  <i className ="fa-brands fa-twitter"></i>
                  <i className ="fa-brands fa-linkedin-in"></i>
                  <i className ="fa-brands fa-youtube"></i>
              </div>
        </div>
      <header>
        <img src="Images/logo.png" alt="logo" className="logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/">Mens</a>
          <a href="/">Womens</a>
          <a href="/">Kid's Collection</a>
          <a href="/login">Login</a>
        </nav>
        <div className="rightNav">
          <img src="Images/search.png" alt="search" />
          <img src="Images/user.png" alt="profile" />
          <div style={{position:'relative'}}>
            <img src="Images/cart.png" alt="cart" />
            <span className="badge">0</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
