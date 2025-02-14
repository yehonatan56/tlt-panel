import { login, register } from "../requests/auth.ts";
import { user } from "../types.ts";

export const auth = async (user: user) => {
  return await login(user);
};

export const createUser = async (user: user) => {
  return await register(user);
};
