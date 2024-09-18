const mongoose = require("mongoose");
const linkHook = require("../hooks/link");
const linkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: [true, "Link is required"],
    unique: [true, "Link must be unique"],
  },
  purchases: {
    type: Number,
    default: 0,
  },
});
linkHook(linkSchema);
const LinkModel = mongoose.model("links", linkSchema);
module.exports = LinkModel;
