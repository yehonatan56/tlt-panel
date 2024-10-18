import path from "path";

export const PUBLIC_PATH = path.join(__dirname, "public");

export const ENV_PATH = path.join(
  __dirname,
  "..",
  ["local", "localhost", undefined, ""].includes(process.env.NODE_ENV)
    ? ".env.local"
    : ".env",
);
