var express = require('express');
var cors = require('cors');
var multer = require('multer');
var cloudinary = require('cloudinary').v2;

var app = express();
var upload = multer({ storage: multer.memoryStorage() });

require('dotenv').config({
    path: '../.env.local',
});

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(cors()); // Opened up to all origins here, but you'll want to set this :)

app.post('/upload', upload.single('image'), function (req, res) {
    if (!req.file) return res.sendStatus(400); // If there's no image, respond with bad request error

    try {
        // Base 64 encode the file to create a data URI for the uploader
        var base64EncodedImage = Buffer.from(req.file.buffer).toString('base64');
        var dataUri = 'data:' + req.file.mimetype + ';base64,' + base64EncodedImage;

        // Use the cloudinary uploader to upload the image
        cloudinary.uploader
            .upload(dataUri, function (error, response) {
                if (error) {
                    return res.status(500).json({ err: error });
                }
                // Return the public_id (or whatever else you want)
                return res.status(201).json({ publicId: response.public_id });
            })
            .then((r) => console.log(r));
    } catch (err) {
        return res.status(500).json({ err: err });
    }
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});
