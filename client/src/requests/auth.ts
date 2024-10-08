import { user } from "../types.ts";

export const login = async (puser: user) => {
  await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(puser),
  })
    .then((res) => res.json())
    .then((data) => data.token && localStorage.setItem("token", data.token));
  return localStorage.getItem("token");
};

export const register = async (puser: user) => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(puser),
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};
