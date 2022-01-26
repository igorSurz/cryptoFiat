const express = require('express');
const router = express.Router();
const { signup, signin, update } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/update', update);

module.exports = router;
