import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { test2 } from '../config/db';
import {
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CONNECTION_STRING,
} from './enviromment-varibals';
console.log('CLOUDINARY_CLOUD_NAME', CLOUDINARY_CLOUD_NAME);
console.log('CONNECTION_STRING', CONNECTION_STRING);
// cloudinary.config({
console.log('test2', test2);
cloudinary.config(test2);
//     cloud_name: 'dk5irlhb0',
//     api_key: '575444824168269',
//     api_secret: 'B04tsDTtOJuZfjmRGuNkFek5iXw',
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
