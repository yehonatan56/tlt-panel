import { user } from "../types.ts";

export const login = async (puser: user) => {
  const user = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(puser),
  })
    .then((res) => res.status === 200)
    .then((data: boolean) => data);
  return user;
};
