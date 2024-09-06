const express = require("express");
const router = express.Router(); // Correct initialization
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation");
const { signup, login } = require("../Controllers/AuthController");



// Signup Route
router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);
module.exports = router;
