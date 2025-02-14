import { user } from "../types.ts";
import { environment } from "../enviromment.ts";
const { server } = environment;

export const login = async (puser: user) => {
  try {
    const response = await fetch(server + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(puser),
    });

    if (!response.ok) {
      // Checks if response status is not in the range 200-299
      return false;
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false; // Return false if an error occurs during fetch
  }
};

export const register = async (puser: user) => {
  const response = await fetch(server + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(puser),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
