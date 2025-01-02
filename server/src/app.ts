import express from 'express';
import configExpress from './config/express';
import connectDB from './config/db';
import logger from './utils/logger';
import { PORT } from './utils/enviromment-varibals';
import './utils/whatsapp';
const app = express();

logger.info('', 'Starting server...');
connectDB()
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
// export const client = client;
