const express = require('express');
const router = express.Router();
const { chart, currentPrice } = require('../controllers/chart');

router.get('/chart', chart);
router.get('/price', currentPrice);

module.exports = router;
