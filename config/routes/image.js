const express = require('express');
const jwt = require('express-jwt');
const config = require('../env');
const imageCtrl = require('../../api/controllers/ImageController');


const router = express.Router();
const secret = config.jwt.jwtSecret;

router.route('/')
  .post(
    jwt({ secret }), imageCtrl.downloadImage,
    imageCtrl.createThumbNail, imageCtrl.serveThumbNail,
  );
module.exports = router;
