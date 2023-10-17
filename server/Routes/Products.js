const express = require("express");
const router = express.Router();
const Products = require("../Models/Products");

router.use(express.json());

router.post("/products", async (req, res) => {
    console.log(req.body);
  try {
    const newProduct = await Products.create({
      img: req.body.img,
      productName: req.body.productName,
      category: req.body.category,
      price: req.body.price,
      desc: req.body.desc,
      gender: req.body.gender,
      features: req.body.features,
      ratings: req.body.ratings,
    });
    res.json(newProduct);
  } catch (err) {
    console.log(err);
  }
});

// Get Mens Products  ---------------------------------------

router.get("/products/mens", async (req, res) => {
  try{
      const products = await Products.find({gender: "Men"});
      res.json(products);
  }catch(err){
      console.log(err);
  }
});

// Get Womens Products  ---------------------------------------

router.get("/products/womens", async (req, res) => {
  try{
      const products = await Products.find({gender: "Women"});
      res.json(products);
  }catch(err){
      console.log(err);
  }
});

// Get all Products  ---------------------------------------

router.get("/products", async (req, res) => {
    try{
        const products = await Products.find({});
        res.json(products);
    }catch(err){
        console.log(err);
    }
});

// Get Product By Specific ID

router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Products.findById(productId);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router;
