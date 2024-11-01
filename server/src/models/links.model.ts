import mongoose from "mongoose";
import linkHook from "../hooks/link.hook";

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
    image: {
      type: String,
    },
    customers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: [true, "Customer is required"],
      },
    ],
  },
  { timestamps: true },
);

linkHook(linkSchema);

const LinkModel = mongoose.model("links", linkSchema);
export default LinkModel;
