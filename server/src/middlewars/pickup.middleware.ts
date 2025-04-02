import { Request, Response, NextFunction } from 'express';
import PickupModel from '../models/pickup.model';
export const addPickupMW = async (req: Request, _res: Response, next: NextFunction) => {
    if (req.body.pickupMethod.includes('pickup')) {
        await new PickupModel({
            customer: req.customerID,
            products: req.body.products,
            location: req.body.pickupMethod.endsWith('3') ? 'rishon' : 'zefat',
        }).save();
    }
    next();
};
