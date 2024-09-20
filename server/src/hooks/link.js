const linkHook = async (schema) => {
  schema.pre("save", async function (next) {
    this.link = "https://thelosttreasures.net/?" + this.link;
  });
};
module.exports = linkHook;
