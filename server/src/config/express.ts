import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '../routes/index';
import { PUBLIC_PATH } from '../paths';
import logger from '../utils/logger';
import requestID from "../middlewars/requestID.middleware";

export default (app: Application) => {
    app.use(cookieParser());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(PUBLIC_PATH));
    //    app.use(fileUpload({ useTempFiles: true }));

    app.use(requestID());
    routes(app);

    app.use((err, _req: Request, _res: Response, _next: NextFunction) => {
        logger.error('', err.message, err.stack);
    });
};
