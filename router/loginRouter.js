// External Imports
const express = require("express");

// Internal Imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decoateHtmlResponse");
const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
