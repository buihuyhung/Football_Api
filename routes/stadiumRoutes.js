const express = require("express");
const { createStadium } = require("../controllers/stadiumController");

const router = express.Router();

router.route("/").post(createStadium);

module.exports = router;
