import dotenv from 'dotenv';
import { ENV_PATH } from '../paths';

dotenv.config({ path: ENV_PATH });

const CONNECTION_STRING = 'mongodb+srv://root:A12345a@cluster0.ivjfmh6.mongodb.net/tlt';
const NODE_ENV = 'production';
const CLOUDINARY_CLOUD_NAME = 'dk5irlhb0';
const CLOUDINARY_API_KEY = '575444824168269';
const CLOUDINARY_API_SECRET = 'B04tsDT0JuZfjmRGuNkFek5iXw';
const SECRET =
    'fBmxyy9SJ1VZFqqMgXYghkErk156ymsrIQt3tRhLkS6GD1G2ZAF2fYBgcbK9t45GJgTfVdJ9b9Ht0FFGzsjq3ogHhar3nQcRcR6gBxWh7HhZnW2eswe01waXQEhtXR6badOpB0gWns6h rLAF99zoCvKcnDF0TU';
const WHATSAPP_GROUP_ID = '1203633749548055953ag.us';

export {
    CONNECTION_STRING,
    NODE_ENV,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    SECRET,
    WHATSAPP_GROUP_ID,
};
