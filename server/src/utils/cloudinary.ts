import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: 'dk5irlhb0',
    api_key: '575444824168269',

    api_secret: 'B04tsDT0JuZfjmRGuNkFek5iXw',
});
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
