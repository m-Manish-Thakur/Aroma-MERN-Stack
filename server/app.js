const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//  Connect MongoDB
const DB =
  "mongodb+srv://Mern-Stack-Aroma:ManishThakurAroma202121@cluster0.y8skyqp.mongodb.net/aroma-e-commerce?retryWrites=true&w=majority";

// Routes
const userRoute = require("./Routes/User");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.json("Welcome to Aroma E-Commerce");
});

//  Port

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

//   mongodb+srv://Mern-Stack-Aroma:<password>@cluster0.y8skyqp.mongodb.net/?retryWrites=true&w=majority
//   ManishThakurAroma202121
