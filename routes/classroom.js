const express = require("express");
const router = express.Router();
const { getclasses, createClass } = require("../controllers/classroom");
router.get("/getClasses", getclasses);
router.post("/createClass", createClass);
module.exports = router;
