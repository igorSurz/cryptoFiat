const express = require('express');
const router = express.Router();
const { signup, signin, update, retrieveuser } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/update', update);
router.post('/retrieveuser', retrieveuser);

module.exports = router;
