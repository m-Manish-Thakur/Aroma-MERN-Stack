const express = require("express");
const router = express.Router();
const Address = require("../Models/Address");

router.use(express.json());

// Add a new address
router.post("/add-address", async (req, res) => {
  const { user, street, city, state, postalCode, country } = req.body;
  try {
    const address = await Address.create({
      user,
      street,
      city,
      state,
      postalCode,
      country,
    });
    console.log(address);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: "Error adding address" });
  }
});

// Update an existing address
router.put("/edit-address/:addressId", async (req, res) => {
  const addressId = req.params.addressId;
  const { street, city, state, postalCode, country } = req.body;
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      {
        street,
        city,
        state,
        postalCode,
        country,
      },
      { new: true }
    );
    res.status(200).json(updatedAddress);
  } catch (error) {
    res.status(500).json({ error: "Error updating address" });
  }
});

// Get a user's addresses
router.get("/user-addresses/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const addresses = await Address.find({ user: userId });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching addresses" });
  }
});

module.exports = router;