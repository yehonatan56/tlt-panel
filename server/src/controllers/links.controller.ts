import { Request, Response, NextFunction } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import {
    getLinksServiceHandler,
    createLinkServiceHandler,
    deleteLinkServiceHandler,
    getHighestPurchasesServiceHandler,
    getPagesServiceHandler,
    purchaseServiceHandler,
    editLinkServiceHandler,
} from '../services/links.service';
import { generateV4UUID } from '../middlewars/requestID.middleware';

export const getLinksCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const links = await getLinksServiceHandler(req.query);
        res.json(links);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const createLinkCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const link = await createLinkServiceHandler(req.body);
        res.json(link);
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export const deleteLinkCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const link = await deleteLinkServiceHandler(req.params.id);
        res.json(link);
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export const getHighestPurchasesCtrl = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const links = await getHighestPurchasesServiceHandler();
        res.json(links);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const getPagesCtrl = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const pages = await getPagesServiceHandler();
        res.json(pages);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export const uploadCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
    if (!req.file) return res.sendStatus(400); // If there's no image, respond with bad request error

    const publicId = `${generateV4UUID()}-${req.file.originalname}.png`;
    try {
        // Base 64 encode the file to create a data URI for the uploader
        const base64EncodedImage = Buffer.from(req.file.buffer).toString('base64');
        const dataUri = 'data:' + req.file.mimetype + ';base64,' + base64EncodedImage;

        // Use the cloudinary uploader to upload the image
        cloudinary.uploader
            .upload(dataUri, { public_id: publicId, folder: 'tlt' }, function (error, response) {
                if (error) {
                    return res.status(500).json({ err: error });
                }
                // Return the public_id (or whatever else you want)
                return res.status(201).json({ publicId: response.public_id, url: response.url });
            })
            .then((r) => console.log(r));
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

export const purchaseCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const link = await purchaseServiceHandler(req.body.link, req.customerID);
        res.json(link);
    } catch (e) {
        res.status(500).send(e?.message ?? e);
    }
};

export const editLinkCtrl = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const link = await editLinkServiceHandler(req.params.id, req.body);
        res.json(link);
    } catch (e) {
        res.status(500).send(e?.message ?? e);
    }
};
