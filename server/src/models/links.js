const mongoose = require("mongoose");
const linkHook = require("../hooks/link");
const { LINKS } = require("../mocks/links");

const linkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: [true, "Link is required"],
      unique: [true, "Link must be unique"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      //required: [true, "User is required"],
    },
    purchases: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

linkHook(linkSchema);

const LinkModel = mongoose.model("links", linkSchema);
module.exports = LinkModel;
