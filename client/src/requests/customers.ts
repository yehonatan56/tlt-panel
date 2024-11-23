import { environment } from "../enviromment.ts";

const { server } = environment;

export const getCustomersRequest = async () => {
  const response = await fetch(server + "/customers/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.json();
};
