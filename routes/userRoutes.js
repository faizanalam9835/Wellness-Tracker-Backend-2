const express = require('express');
const router = express.Router();
const authController = require("../controllers/userControllers");

router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// forgot password - sends reset email
// router.post('/forgot-password', authController.forgotPassword);

// // reset password - accepts token and new password
// router.post('/reset-password', authController.resetPassword);


// router.get('/:id', authController.getUserById)

module.exports = router;