const express = require('express');
const { signUp, signIn, getUserData } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/getdata', getUserData);

module.exports = router;
