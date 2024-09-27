import { user } from "../types.ts";

export const login = async (puser: user) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(puser),
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login request failed", error);
    throw error; // Re-throw error to handle it further upstream
  }
};
