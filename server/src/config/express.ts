import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '../routes/index';
import { PUBLIC_PATH } from '../paths';

export default (app: Application) => {
    app.use(cookieParser());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(PUBLIC_PATH));

    // todo: add requestID mw (add uuid for req.id)
    routes(app);

    // todo: add error handler mw
};
