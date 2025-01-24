import { Request, Response, NextFunction } from 'express';
import { getCustomersServiceHandler } from '../services/customers.service';

const getCustomersCtrl = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
        const customers = await getCustomersServiceHandler();
        res.json(customers);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export { getCustomersCtrl };
