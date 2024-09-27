import { login } from "../requests/auth.ts";
import { user } from "../types.ts";

export const auth = async (user: user) => {
  const auth: { isAuth: boolean; token: string } = await login(user);
  if (auth.isAuth) {
    console.log("Logged in");
    return true;
  } else {
    console.log("Error logging in");
    return false;
  }
};
