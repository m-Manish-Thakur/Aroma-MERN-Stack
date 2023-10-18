const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;