import dotenv from 'dotenv';
import { ENV_PATH } from '../paths';

dotenv.config({ path: ENV_PATH });

const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/test';
const NODE_ENV = process.env.NODE_ENV || 'development';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const SECRET = process.env.SECRET || 'secret';
const WHATSAPP_GROUP_ID = process.env.WHATSAPP_GROUP_ID;
const WHATSAPP_GROUP_ID_COMMUNITY = process.env.WHATSAPP_GROUP_ID_COMMUNITY;
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN;
export {
    CONNECTION_STRING,
    NODE_ENV,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    SECRET,
    WHATSAPP_GROUP_ID,
    WHATSAPP_GROUP_ID_COMMUNITY,
    PORT,
    TOKEN,
};
