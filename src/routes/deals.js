const express = require('express');
const router = express.Router();
const { newDeal } = require('../controllers/dealsList');

router.post('/newdeal', newDeal);
// router.post('/signin', signin);
// router.post('/update', update);
// router.post('/retrieveuser', retrieveuser);

module.exports = router;
