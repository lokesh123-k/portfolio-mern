const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER FUNCTIONS CORRECTLY
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

module.exports = router;
