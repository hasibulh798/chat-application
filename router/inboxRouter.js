// External Imports
const express = require("express");

// Internal Imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decoateHtmlResponse");
const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
