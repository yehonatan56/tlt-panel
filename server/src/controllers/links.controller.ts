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
    const links = await getLinksServiceHandler(req.query);
    res.json(links);
  } catch (e) {
    res.json(e);
  }
};

const createLinkCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const link = await createLinkServiceHandler(req);
    res.json(link);
  } catch (e) {
    res.json(e);
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
    res.json(e);
  }
};

const getHighestPurchasesCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const links = await getHighestPurchasesServiceHandler();
    res.json(links);
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
    res.json(pages);
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
    res.json(link);
  } catch (e) {
    res.json(e);
  }
};

const uploadCtrl = async (req: Request, res: Response, next: NextFunction) => {
  res.json(req.file.originalname);
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
