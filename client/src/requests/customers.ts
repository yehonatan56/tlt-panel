import { environment } from "../enviromment.ts";

const { server } = environment;

export const getCustomersRequest = async (page: number) => {
  const response = await fetch(
    (server + "/customers/?page=" + page) as string,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.json();
};
