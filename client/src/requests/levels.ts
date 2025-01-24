import { environment } from "../enviromment.ts";
import { level } from "../types.ts";

const { server } = environment;

export const getLevels = async (): Promise<level[]> => {
  const res = await fetch(server + "/levels", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export const addLevel = async (level: level) => {
  const res = await fetch(server + "/levels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(level),
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};
