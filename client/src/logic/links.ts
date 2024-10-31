import {
  addLinkRequest,
  updateLinkRequest,
  uploadFileRequest,
} from "../requests/links.ts";

export const addLinkLogic = async (link: string, file: any) => {
  const image = await uploadFileRequest(file);
  console.log(image);
  const response = await addLinkRequest(link, image);
  return response;
};

export const updateLinkLogic = async (id: string, link: string, file: any) => {
  const image = await uploadFileRequest(file);
  const response = await updateLinkRequest(id, link, image);
  return response;
};
