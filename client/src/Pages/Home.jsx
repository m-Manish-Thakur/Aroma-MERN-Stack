import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Carasual from "../Components/Carasual";

const Home = () => {
  return (
    <>
      <div className="offer">
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer{" "}
        <span>Shop Now</span>
      </div>

      <Carasual />

      <div id="sections">
        <Link to="/products/mens" style={{ textDecoration: "none" }}>
          <div
            className="con"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgb(10,10,10) 2%, transparent 60%), url("Images/Mens_fashion.webp")',
            }}
          >
            <h3>Men's fashion</h3>
            <Link to="/Men_Product">
              <button>Shop Now</button>
            </Link>
          </div>
        </Link>

        <Link to="/products/womens" style={{ textDecoration: "none" }}>
          <div
            className="con"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgb(10,10,10) 2%, transparent 60%), url("Images/women1.png")',
            }}
          >
            <h3>Women's fashion</h3>
            <button>Shop Now</button>
          </div>
        </Link>
        <div
          className="con"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgb(10,10,10) 2%, transparent 60%), url("Images/kid2.jpeg")',
          }}
        >
          <h3>Kid's fashion</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
