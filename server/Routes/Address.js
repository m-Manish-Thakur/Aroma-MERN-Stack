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
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: "Error adding address" });
  }
});

// Delete user's adderess
router.delete("/delete-address/:addressId", async (req, res) => {
  const addressId = req.params.addressId;
  try {
    // If the checks pass, you can proceed to delete the address
    await Address.findByIdAndRemove(addressId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Error fetching addresses" });
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
