import path from "path";

const envPath = (): string => {
  if (["local", "localhost", undefined, ""].includes(process.env.NODE_ENV)) {
    return ".env.local";
  } else if (process.env.NODE_ENV === "test") {
    return ".env.test";
  }
  return ".env";
};
export const PUBLIC_PATH = path.join(__dirname, "public");

export const ENV_PATH = path.join(__dirname, "..", envPath());
