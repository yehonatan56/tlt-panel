import { NextFunction } from "express";

const PREFIX_URL = "https://thelosttreasures.net/?";

const addPrefix = (link: string) => {
  if (link.startsWith(PREFIX_URL)) {
    return link;
  }
  return PREFIX_URL + link;
};
const linkHook = (schema) => {
  schema.pre("save", function (next: NextFunction) {
    this.link = addPrefix(this.link);
    next();
  });
  schema.pre("findOneAndUpdate", function (next: NextFunction) {
    this._update.link = addPrefix(this._update.link);
    next();
  });
};

export default linkHook;
