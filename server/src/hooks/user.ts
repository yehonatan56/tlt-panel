import bcrypt from "bcrypt";
import { NextFunction } from "express";

const userHook = (schema) => {
  schema.pre("save", async function (next: NextFunction) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
};

export default userHook;
