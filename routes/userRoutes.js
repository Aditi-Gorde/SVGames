const express = require("express");
const {
  signupUser,
  currentUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const {
  validateToken,
  expiredToken,
} = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.get("/current", expiredToken, validateToken, currentUser);

router.post("/logout", logoutUser);

module.exports = router;
