const PREFIX_URL = "https://thelosttreasures.net/?";

module.exports = (schema) => {
  schema.pre("save", function (next) {
    if (!this.link.startsWith(PREFIX_URL)) {
      this.link = PREFIX_URL + this.link;
    }

    next();
  });
};
