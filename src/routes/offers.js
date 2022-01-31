const express = require('express');
const router = express.Router();
const { newOffer, retrieveAllOffers } = require('../controllers/offerList');

router.post('/newoffer', newOffer);
router.post('/alloffers', retrieveAllOffers);

module.exports = router;
