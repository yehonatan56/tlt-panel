import { login } from "../requests/auth.ts";
import { user } from "../types.ts";

export const auth = async (user: user) => {
  const auth = await login(user);
  if (auth !== "undefined") {
    console.log("Success");
    return true;
  } else {
    console.log("Error");

    return false;
  }
};
