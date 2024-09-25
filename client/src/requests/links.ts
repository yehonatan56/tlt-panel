export const addLinkRequest = async (link: string) => {
  debugger;
  const response = await fetch("https://localhost:3000/links", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ link }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
