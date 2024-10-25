import { addLinkRequest, uploadFileRequest } from "../requests/links.ts";

export const addLinkLogic = async (link: string, file) => {
  const image = await uploadFileRequest(file);
  console.log(image);
  const response = await addLinkRequest(link, image);
  return response;
};
