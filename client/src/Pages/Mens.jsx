import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import "./Style.css";
import axios from "axios";
import ShimmerUI from "../Components/ShimmerUI";

const Mens = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API Data
    axios
      .get("http://localhost:8000/api/products/mens")
      .then((response) => {
        setProducts(response.data);
        console.log(Products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div id="mens_fashion">
        <div className="header">
          <div style={{ marginLeft: "10px" }}>
            <p>Popular Items in the market</p>
            <h2>Trending Products</h2>
          </div>
          <div className="filter">
            <select class="form-select" aria-label="Default select example">
              <option value="All">All</option>
              <option value="Mens T-shirt">T-Shirt</option>
              <option value="Mens Pants">Pants</option>
              <option value="Mens Shoes">Shoes</option>
              <option value="Mens Accessories">Accessories</option>
            </select>

            <select
              class="mr-2 form-select"
              aria-label="Default select example"
            >
              <option selected>Price</option>
              <option value="High-Low">High-Low</option>
              <option value="Low-High">Low-High</option>
            </select>

            <button>Reset Filter</button>
          </div>
        </div>

        <div id="products_con">
          {Products.length > 0 ? (
            Products.map((item) => <Product item={item} />)
          ) : (
            <div id="shimmerUI_container">
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mens;
