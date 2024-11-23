import { Request, Response, NextFunction } from 'express';
import { getCustomersServiceHandler, addCustomerServiceHandler } from '../services/customers.service';

const getCustomersCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const customers = await getCustomersServiceHandler(+req.params.page);
        res.json(customers);
    } catch (e) {
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
        res.status(401).send(e?.message ?? e);
        next(Error('Error adding customer'));
    }
};

export { getCustomersCtrl, addCustomerCtrl };
