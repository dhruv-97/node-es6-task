const express = require('express');
const config = require('../env');
const jwt = require('express-jwt');
const patchCtrl = require('../../api/controllers/PatchController');


const router = express.Router();
const secret = config.jwt.jwtSecret;

router.route('/')
  .post(jwt({ secret }), patchCtrl.jsonPatch);
module.exports = router;
