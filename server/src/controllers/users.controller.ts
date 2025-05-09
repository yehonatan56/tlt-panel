import { NextFunction, Request, Response } from 'express';
import { getUsernamesServiceHandler, registerServiceHandler } from '../services/users.service';

const getUsernamesCtrl = async (_req: Request, res: Response, _next: NextFunction) => {
    try {
        const users = await getUsernamesServiceHandler();
        res.send(users);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

const registerCtrl = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        const users = await registerServiceHandler(req.body);
        res.send(users);
    } catch (e) {
        res.status(204).send(e?.message ?? e);
    }
};

export { getUsernamesCtrl, registerCtrl };
