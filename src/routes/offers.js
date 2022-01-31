const express = require('express');
const router = express.Router();
const { newOffer, retrieveAllOffers, retrieveOffer } = require('../controllers/offerList');

router.post('/newoffer', newOffer);
router.post('/alloffers', retrieveAllOffers);
router.post('/retrieveoffer', retrieveOffer);

module.exports = router;
