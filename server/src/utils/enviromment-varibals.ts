import dotenv from 'dotenv';
import { ENV_PATH } from '../paths';

dotenv.config({ path: ENV_PATH });

const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/test';
const NODE_ENV = process.env.NODE_ENV || 'development';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const SECRET = process.env.SECRET || 'secret';

export { CONNECTION_STRING, NODE_ENV, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, SECRET };