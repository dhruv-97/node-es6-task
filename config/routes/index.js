const express = require('express');
const authRoutes = require('./auth');
const patchRoutes = require('./patch');
const imageRoutes = require('./image');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/patch', patchRoutes);
router.use('/image', imageRoutes);

module.exports = router;
