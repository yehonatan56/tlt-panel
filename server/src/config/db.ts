import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async (url: string) => {
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
            logger.error('', 'Failed to c!onnect to the database', { error: err });
        });
};

export default connectDB;
