import { Request, Response, NextFunction } from "express";
import {
  getLinksServiceHandler,
  createLinkServiceHandler,
  deleteLinkServiceHandler,
  getHighestPurchasesServiceHandler,
  getPagesServiceHandler,
  purchaseServiceHandler,
} from "../services/links.service";
const getLinksCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const links = await getLinksServiceHandler();
    res.send(links);
  } catch (e) {
    res.send(e);
  }
};

const createLinkCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const link = await createLinkServiceHandler(req);
    res.send(link);
  } catch (e) {
    res.send(e);
  }
};

const deleteLinkCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const link = await deleteLinkServiceHandler(req.params.id);
    res.json(link);
  } catch (e) {
    res.send(e);
  }
};

const getHighestPurchasesCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const links = await getHighestPurchasesServiceHandler();
    res.send(links);
  } catch (e) {
    next(e);
  }
};

const getPagesCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const pages = await getPagesServiceHandler();
    res.send(pages);
  } catch (e) {
    next(e);
  }
};

const purchaseCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const link = await purchaseServiceHandler(req.body.link);
    res.send(link);
  } catch (e) {
    res.send(e);
  }
};

const uploadCtrl = async (req: Request, res: Response, next: NextFunction) => {
  res.send(req.file.originalname);
};

export {
  getLinksCtrl,
  createLinkCtrl,
  deleteLinkCtrl,
  getHighestPurchasesCtrl,
  getPagesCtrl,
  purchaseCtrl,
  uploadCtrl,
};
