const express = require('express');
const { signUp, signIn, getUserData, getName } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/getdata', getUserData);
router.get('/id', getName); // Use GET method and retrieve email from params

module.exports = router;
