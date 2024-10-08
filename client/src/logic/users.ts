import { login, register } from "../requests/auth.ts";
import { user } from "../types.ts";

export const auth = async (user: user) => {
  const auth = await login(user);
  if (auth) {
    console.log("Success");
    return true;
  } else {
    console.log("Error");

    return false;
  }
};

export const createUser = async (user: user) => {
  const res = await register(user);
  if (res.status === 401) {
    console.log("Error");
    return false;
  }
  console.log("Success");
  return true;
};
