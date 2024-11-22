import express from 'express';
import configExpress from './config/express';
import connectDB from './config/db';
import logger from './utils/logger';
const app = express();

connectDB()
    .then(() => configExpress(app))
    .then(() => {
        app.listen(3000, () => {
            logger.info('', 'Server started on port 3000');
        });
    })
    .catch((err) => {
        logger.error('', 'Error connecting to database', { error: err });
    });

export default app;
