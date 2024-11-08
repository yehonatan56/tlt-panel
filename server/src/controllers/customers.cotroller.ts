import { Request, Response, NextFunction } from 'express';
import { addCustomerServiceHandler } from '../services/customers.service';

const addCustomerCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = await addCustomerServiceHandler(req.body);
        req.customerID = id;
        next();
    } catch (e) {
        res.status(401).send(e?.message ?? e);
    }
};

export { addCustomerCtrl };
