const express = require("express");

const {
  validateRegister,
  validateLogin,
  authorization,
} = require("../middlewares/auth.middlewares");

const {
  register,
  login,
  getProfile,
} = require("../controllers/auth.controllers");
const { adminRole, userRole } = require("../constants/auth");

const router = express.Router();
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/profile", authorization(adminRole, userRole), getProfile);

module.exports = router;
