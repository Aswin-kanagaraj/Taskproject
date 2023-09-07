const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    maxlength: [8, "Password cannot exceed 8 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

userSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

let model = mongoose.model("Users", userSchema);
module.exports = model;
