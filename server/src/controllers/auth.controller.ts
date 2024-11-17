import { Request, Response, NextFunction } from 'express';
import { loginServiceHandler } from '../services/auth.service';
import logger from '../utils/logger';

export const loginCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { username, password } = req.body;
        const { message, status, token } = await loginServiceHandler({ username, password });

        logger.info(req.id, 'login successfully, generated token');

        res.cookie('token', token, { httpOnly: true });
        res.status(status).json({ message, token });
    } catch (e) {
        res.status(401).send(e?.message ?? e);
        next(Error('User not found or invalid credentials'));
    }
};
