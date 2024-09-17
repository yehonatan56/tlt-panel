const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
