import { Request, Response, NextFunction } from 'express';
import PickupModel from '../models/pickup.model';
import { PICKUP_LOCATION_CODES } from '../utils/consts';
export const addPickupMW = async (req: Request, _res: Response, next: NextFunction) => {
    if (req.body.pickupMethod.includes('pickup')) {
        const location = req.body.pickupMethod.endsWith('3') ? 'rishon' : 'zefat';

        const pickup = new PickupModel({
            customer: req.customerID,
            products: req.body.products,
            location,
        });
        await pickup.save();
        req.location = location;
        req.pickupId = pickup._id.toString();
    }

    next();
};

export const checkCodePickupLocationMW = async (req: Request, res: Response, next: NextFunction) => {
    const location = await PickupModel.findById(req.params.id).then((pickup) => pickup?.location);
    if (PICKUP_LOCATION_CODES[location] === +req.body.code) {
        return next();
    }
    res.status(400).send('Invalid pickup location code');
};

export const checkIfPickupIsExistMW = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pickup = await PickupModel.findById(req.params.id);
        next();
    } catch (err) {
        res.status(400).send('Pickup not found');
    }
};
