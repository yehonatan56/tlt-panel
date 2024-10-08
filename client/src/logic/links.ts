import { addLinkRequest } from "../requests/links.ts";

export const addLinkLogic = async (link: string) => {
  const response = await addLinkRequest(link);
  return response;
};
