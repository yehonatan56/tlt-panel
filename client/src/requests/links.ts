import { params } from "../types.ts";
import { environment } from "../enviromment.ts";

const { server } = environment;

const getHeaders = (multer = false) => {
  const headers: any = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  if (!multer) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
};
export const addLinkRequest = async (link: string, image: string) => {
  const linkObj = { link, image };

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
  return response;
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

export const uploadFileRequest = async (file: any) => {
  const response = await fetch(server + "/links/upload", {
    method: "POST",
    headers: getHeaders(true),
    body: file,
  })
    .then((res) => res.json())
    .then((data) => data);
  return response.url;
};

export const updateLinkRequest = async (
  id: string,
  link: string,
  image: string,
) => {
  const linkObj = { link, image };

  const response = await fetch(server + "/links/" + id, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(linkObj),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
