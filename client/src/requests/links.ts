export const addLinkRequest = async (link: string) => {
  const linkObj = { link: link };
  const response = await fetch("http://localhost:3000/links", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(linkObj),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
