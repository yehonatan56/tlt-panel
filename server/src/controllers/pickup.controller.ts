import { Request, Response } from 'express';
import { acceptPickupServiceHandler } from '../services/pickup.service';

export const acceptPickupCtrl = async (req: Request, res: Response) => {
    try {
        const pickup = await acceptPickupServiceHandler(req.params.id);
        res.json(pickup);
    } catch (e) {
        res.status(400).send(e.message);
    }
};
