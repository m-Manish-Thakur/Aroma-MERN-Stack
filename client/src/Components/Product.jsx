import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Product = ({ item }) => {
  return (
    <>
      <div id="product">
        <div className="product_con">
          <Link to={`/products/${item._id}`}>
            <div className="productImage">
              <img src={item.img} alt="" />
            </div>
          </Link>
          <div className="text">
            <div className="rating_price">
              <p style={{ fontWeight: "bold" }} className="price">
                $ {item.price}
              </p>
              <Stack spacing={1}>
                <Rating
                  name="size-small"
                  readOnly
                  defaultValue={item.ratings}
                />
              </Stack>
            </div>
            <h3>{item.productName}</h3>
            <p
              style={{
                color: "rgb(80,100,100)",
                textAlign: "left",
                fontFamily: "'jost', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              {item.category}
            </p>
            <button className="add_cart_btn">Add to Cart</button>
            <div id="cartbtn">
              <img src="Images/store.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
