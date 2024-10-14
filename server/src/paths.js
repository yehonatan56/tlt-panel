const path = require("path");

module.exports.PUBLIC_PATH = path.join(__dirname, "public");

module.exports.ENV_PATH = path.join(
  __dirname,
  "..",
  ["local", "localhost", undefined, ""].includes(process.env.NODE_ENV)
    ? ".env.local"
    : ".env",
);
