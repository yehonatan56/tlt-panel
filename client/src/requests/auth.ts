import { user } from "../types.ts";

export const login = async (puser: user) => {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(puser),
  });
  if (!response.ok) throw new Error("Login failed");
  const data = await response.json();
  const isAuth = response.url.includes("ok");
  const token = data.token;
  return { isAuth, token };
};
