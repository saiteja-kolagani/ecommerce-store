const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ensure these functions exist in your controller
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
