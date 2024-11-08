import { Request, Response, NextFunction } from 'express';
import {
    getLinksServiceHandler,
    createLinkServiceHandler,
    deleteLinkServiceHandler,
    getHighestPurchasesServiceHandler,
    getPagesServiceHandler,
    purchaseServiceHandler,
    editLinkServiceHandler,
} from '../services/links.service';

export const getLinksCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const links = await getLinksServiceHandler(req.query);
        res.json(links);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const createLinkCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await createLinkServiceHandler(req.body);
        res.json(link);
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export const deleteLinkCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await deleteLinkServiceHandler(req.params.id);
        res.json(link);
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export const getHighestPurchasesCtrl = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const links = await getHighestPurchasesServiceHandler();
        res.json(links);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const getPagesCtrl = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const pages = await getPagesServiceHandler();
        res.json(pages);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const uploadCtrl = async (req: Request, res: Response, next: NextFunction) => {
    res.json({ image: req.fileGenaratedName });
};

export const purchaseCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await purchaseServiceHandler(req.body.link, req.customerID);
        res.json(link);
    } catch (e) {
        // todo: consist status for bad requests like res.status(500).json(e)
        res.status(500).send(e?.message ?? e);
    }
};

export const editLinkCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link = await editLinkServiceHandler(req.params.id, req.body);
        res.json(link);
    } catch (e) {
        res.status(500).send(e?.message ?? e);
    }
};
