import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      // unique: [true, "Email must be unique"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      // unique: [true, "Phone must be unique"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
  },
  { timestamps: true },
);

const CustomerModel = mongoose.model("customers", customerSchema);
export default CustomerModel;
