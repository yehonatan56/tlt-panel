import { Request, Response, NextFunction } from 'express';
import { getUsernamesServiceHandler, registerServiceHandler } from '../services/users.service';

const getUsernamesCtrl = async (
    // todo: fix TS6133: req is declared but its value is never read. (underscore)
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getUsernamesServiceHandler();
        res.send(users);
    } catch (e) {
        next(e);
    }
};

const registerCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await registerServiceHandler(req.body);
        res.send(users);
    } catch (e) {
        next(e);
    }
};

export { getUsernamesCtrl, registerCtrl };
