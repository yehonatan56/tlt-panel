const mongoose = require("mongoose");
const userHook = require("../hooks/user");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name must be unique"],
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

userHook(userSchema);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
