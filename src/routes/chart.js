const express = require('express');
const router = express.Router();
const {
    chart
} = require('../controllers/chart');

router.get('/chart', chart);

module.exports = router;