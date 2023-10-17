import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Get Full Post By ID
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [productId]);

  return (
    <>
      <div id="productDetails">
        {product ? (
          <div className="product_container">
            <div className="image">
              <img src={product.img} alt="" />
            </div>
            <div className="details">
              <p className="cate">{product.category}</p>
              <p className="name">{product.productName}</p>
              <div className="review">
                <Stack spacing={1}>
                  <Rating
                    name="size-small"
                    readOnly
                    defaultValue={product.ratings}
                  />
                </Stack>
                <p className="review_text">view all 215 reviews</p>
              </div>
              <p className="price">${product.price}</p>
              <div className="buttons">
                <button>Buy Product</button>
                <button className="addtobag">Add to Cart</button>
              </div>
              <p className="cate" style={{ color: "black" }}>
                Description
              </p>
              <p className="desc">{product.desc}</p>
              <div className="colors">
                <p>Colors</p>
                <button
                  className="color"
                  style={{ backgroundColor: "navyblue" }}
                ></button>
                <button
                  className="color"
                  style={{ backgroundColor: "rgb(220, 200, 250)" }}
                ></button>
                <button
                  className="color"
                  style={{ backgroundColor: "rgb(30, 30, 30)" }}
                ></button>
                <button
                  className="color"
                  style={{ backgroundColor: "brown" }}
                ></button>
              </div>
            </div>
          </div>
        ) : (
          <div id="skeleton">
            <div className="img"></div>
            <div id="text">
                <div className="line" style={{width:'30%'}}></div>
                <div className="line" style={{width:'80%', height:'50px'}}></div>
                <div className="line" style={{width:'90%'}}></div>
                <div className="line" style={{width:'70%', height:'50px'}}></div>
                <div className="line" style={{width:'100%', height:'180px'}}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
