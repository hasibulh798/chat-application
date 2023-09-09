// External Imports
const express = require("express");

// Internal Imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decoateHtmlResponse");

const router = express.Router();

//Users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
