import { Request, Response, NextFunction } from 'express';
import { getCustomersServiceHandler, addCustomerServiceHandler } from '../services/customers.service';

const getCustomersCtrl = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const customers = await getCustomersServiceHandler();
        res.json(customers);
    } catch (e) {
        // todo: choose your response: or res.send or next(error)
        res.status(204).send(e?.message ?? e);
        next(Error('Error getting customers'));
    }
};

const addCustomerCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = await addCustomerServiceHandler(req.body);
        req.customerID = id;
        next();
    } catch (e) {
        // todo: choose your response: or res.send or next(error)
        res.status(401).send(e?.message ?? e);
        next(Error('Error adding customer'));
    }
};

export { getCustomersCtrl, addCustomerCtrl };
