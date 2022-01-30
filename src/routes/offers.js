const express = require('express');
const router = express.Router();
const { newOffer } = require('../controllers/offerList');

router.post('/newoffer', newOffer);

module.exports = router;
