import { NextFunction } from "express";

const PREFIX_URL = "https://thelosttreasures.net/?";

const linkHook = (schema) => {
  schema.pre("save", function (next: NextFunction) {
    if (!this.link.startsWith(PREFIX_URL)) {
      this.link = PREFIX_URL + this.link;
    }

    next();
  });
};

export default linkHook;
