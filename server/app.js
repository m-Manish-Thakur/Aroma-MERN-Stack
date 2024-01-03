const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const userRoute = require("./Routes/User");
const productRoute = require("./Routes/Products");
const cartRoute = require("./Routes/Cart");
const addressRoute = require("./Routes/Address");

//  Connect MongoDB
const DB =
  "mongodb+srv://Mern-Stack-Aroma:ManishThakurAroma202121@cluster0.y8skyqp.mongodb.net/aroma-e-commerce?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json("Welcome to Aroma E-Commerce");
});

app.use("/user", userRoute);
app.use("/api", productRoute);
app.use("/cart", cartRoute);
app.use("/address", addressRoute);

//  Port

app.listen(8800, () => {
  console.log("Server Started");
  mongoose
    .connect(
      "mongodb+srv://Mern-Stack-Aroma:ManishThakurAroma202121@cluster0.y8skyqp.mongodb.net/aroma-e-commerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

//   mongodb+srv://Mern-Stack-Aroma:<password>@cluster0.y8skyqp.mongodb.net/?retryWrites=true&w=majority
//   ManishThakurAroma202121
