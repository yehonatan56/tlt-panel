import { environment } from "../enviromment.ts";
import { question } from "../types.ts";

const { server } = environment;

export const getQuestions = async (id: string): Promise<question[]> => {
  const res = await fetch(server + "/questions/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};

export const addQuestionRequest = async (question: question) => {
  const res = await fetch(server + "/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(question),
  })
    .then((res) => res.json())
    .then((data) => data);
  return res;
};
