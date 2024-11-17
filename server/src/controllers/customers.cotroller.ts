import { Request, Response, NextFunction } from 'express';
import { addCustomerServiceHandler } from '../services/customers.service';

const addCustomerCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = await addCustomerServiceHandler(req.body);
        req.customerID = id;
        next();
    } catch (e) {
        res.status(401).send(e?.message ?? e);
        next(Error('Error adding customer'));
    }
};

export { addCustomerCtrl };
