const express = require("express");
const { signup } = require("../controllers/authController");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.route("/").get(getAllUsers);

module.exports = router;
