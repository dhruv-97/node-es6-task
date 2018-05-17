const download = require('image-downloader');
const sharp = require('sharp');
const path = require('path');
const logger = require('../../config/winston');

const options = {
  dest: 'images', // Save to /images path
};
/*
  The request should be of format
  req.body: {
    url: "https://foobar.com/image.jpg"
  }
*/

// Download all images to /images directory with original filename
function downloadImage(req, res, next) {
  options.url = req.body.url;
  download.image(options)
    .then(({ filename }) => {
      logger.info(`File saved to ${filename}`);
      req.filename = filename;
      req.baseName = path.basename(req.filename);
      next();
    }).catch((err) => {
      next(err);
    });
}

// Generate a 50X50px thumbnail by resizing the original image and saving it to /thumbnails path
function createThumbNail(req, res, next) {
  sharp(req.filename)
    .resize(50, 50)
    .toFile(`thumbnails/${req.baseName}`, (err, info) => {
      if (err) next(err);
      logger.info(info);
      next();
    });
}

// Serve the thumbnail generated as a static file
function serveThumbNail(req, res) {
  res.sendFile(req.baseName, { root: path.join(__dirname, '../../thumbnails/') });
}
module.exports = {
  downloadImage,
  createThumbNail,
  serveThumbNail,
};
