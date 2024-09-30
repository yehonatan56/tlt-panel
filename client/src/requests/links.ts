export const addLinkRequest = async (link: string) => {
  const linkObj = { link: link };

  const response = await fetch("http://localhost:3000/links", {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(linkObj),
    // credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
type params = {
  page?: number;
  purchasesLower?: number;
  purchasesHigh?: number;
  dateFrom?: string;
  dateTo?: string;
};

export const getLinksRequest = async (filters: params = {}) => {
  const params = filters
    ? "?" + new URLSearchParams(filters as any).toString()
    : "";
  const response = await fetch("http://localhost:3000/links" + params, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data);
  return response.links;
};

export const getPagesRequest = async () => {
  const response = await fetch("http://localhost:3000/links/pages", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data);
  return +response.pages;
};
