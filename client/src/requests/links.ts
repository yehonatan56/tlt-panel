import { params } from "../types.ts";
import { environment } from "../environment.ts";

const { server } = environment;

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};
export const addLinkRequest = async (link: string) => {
  const linkObj = { link: link };

  const response = await fetch(server + "/links", {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(linkObj),
    // credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export const getLinksRequest = async (filters: params = {}) => {
  const params = filters
    ? "?" + new URLSearchParams(filters as any).toString()
    : "";
  const response = await fetch(server + "/links" + params, {
    method: "GET",
    headers: getHeaders(),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response.links;
};

export const deleteLinkRequest = async (id: string) => {
  const response = await fetch(server + "/links/" + id, {
    method: "DELETE",
    headers: getHeaders(),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export const getHighestRequest = async () => {
  const response = await fetch(server + "/links/highest", {
    method: "GET",
    headers: getHeaders(),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response.links;
};

export const getPagesRequest = async () => {
  const response = await fetch(server + "/links/pages", {
    method: "GET",
    headers: getHeaders(),
  })
    .then((res) => res.json())
    .then((data) => data);
  return +response.pages;
};
