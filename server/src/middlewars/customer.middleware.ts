import { NextFunction, Request, Response } from 'express';
import { addCustomerIfNotExistsServiceHandler } from '../services/customers.service';

export const addCustomerIfNotExistsMW = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = await addCustomerIfNotExistsServiceHandler(req.body.phone || req.body.email, req.body);
        req.customerID = id;
        next();
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};
