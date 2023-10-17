const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");

router.use(express.json());

// Add a product to the cart
router.post("/add-to-cart", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await Cart.findOne({ user: userId });

    if (cart) {
      const existingItem = cart.items.find((item) => item.product == productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    } else {
      const newCart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
      await newCart.save();
    }

    res.json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding to cart" });
  }
});

// Remove a product from the cart
router.delete("/remove-from-cart/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ user: userId });

    if (cart) {
      cart.items = cart.items.filter((item) => item.product != productId);
      await cart.save();
    }

    res.json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error removing from cart" });
  }
});

module.exports = router;
