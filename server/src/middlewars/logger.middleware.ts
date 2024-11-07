import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';

export const loggerMW = (req: Request, _res: Response, next: NextFunction) => {
    logger.info(req.id, `${req.method} ${req.originalUrl}`);
    next();
};
