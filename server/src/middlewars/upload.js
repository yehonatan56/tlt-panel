const multer = require("multer");
const { PUBLIC_PATH } = require("../paths");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PUBLIC_PATH + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMW = multer({ storage });

module.exports.uploadMW = uploadMW;
