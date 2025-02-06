import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from './enviromment-varibals';

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
