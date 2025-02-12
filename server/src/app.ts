import express from 'express';
import configExpress from './config/express';
import connectDB from './config/db';
import logger from './utils/logger';
import { CONNECTION_STRING, PORT } from './utils/enviromment-varibals';

const app = express();

logger.info('', 'Starting server...');

app.get('/', (_req, res) => {
    res.send('OK');
});

connectDB(CONNECTION_STRING)
    .then(() => configExpress(app))
    .then(() => {
        app.listen(PORT, () => {
            logger.info('', 'Server started on port 3000');
        });
    })
    .catch((err) => {
        logger.error('', 'Error connecting to database', { error: err });
    });

export default app;
