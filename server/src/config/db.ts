import mongoose from 'mongoose';
import logger from '../utils/logger';
import { CONNECTION_STRING } from '../utils/enviromment-varibals';

const connectDB = async () => {
    const url: string = CONNECTION_STRING;
    logger.info('', 'Connecting to the database', { url });
    if (!url) {
        logger.error('', 'No connection string provided');
        return;
    }
    await mongoose
        .connect(url)
        .then(() => {
            logger.info('', 'Connected to the database');
        })
        .catch((err) => {
            logger.error('', 'Failed to connect to the database', { error: err });
        });
};

export default connectDB;
