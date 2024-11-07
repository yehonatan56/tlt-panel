import multer from "multer";
import { PUBLIC_PATH } from "../paths";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PUBLIC_PATH + "/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "." + file.originalname.split(".")[1];

    req.fileGenaratedName = fileName;
    cb(null, fileName);
  },
});

const uploadMW = multer({ storage });

export { uploadMW };
