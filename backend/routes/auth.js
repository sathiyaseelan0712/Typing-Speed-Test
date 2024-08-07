const express = require('express');
const { signUp, signIn, getUserData } = require('../controllers/authController');
const router = express.Router();

// Signup route
router.post('/signup', signUp);

// Login route
router.post('/signin', signIn);

router.post('/getdata', getUserData);

module.exports = router;
