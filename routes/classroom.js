const express = require("express");
const router = express.Router();
const {
  getclasses,
  createClass,
  updateClass,
} = require("../controllers/classroom");
router.get("/getClasses", getclasses);
router.post("/createClass", createClass);
router.put("/updateClass", updateClass);
module.exports = router;
