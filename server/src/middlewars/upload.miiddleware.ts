import multer from "multer";
import { PUBLIC_PATH } from "../paths";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PUBLIC_PATH + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMW = multer({ storage });

export { uploadMW };
