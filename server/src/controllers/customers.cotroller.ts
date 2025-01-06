import { Request, Response, NextFunction } from 'express';
import { getCustomersServiceHandler, addCustomerServiceHandler } from '../services/customers.service';

const getCustomersCtrl = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const customers = await getCustomersServiceHandler();
        res.json(customers);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

const addCustomerCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = await addCustomerServiceHandler(req.body);
        req.customerID = id;
        next();
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export { getCustomersCtrl, addCustomerCtrl };
