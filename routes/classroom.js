//Routes for classroom
const express = require("express");
const router = express.Router();
const {
  getclasses,
  createClass,
  updateClass,
  getMembers,
} = require("../controllers/classroom");
router.get("/getClasses", getclasses);
router.post("/createClass", createClass);
router.put("/updateClass", updateClass);
router.get("/getMembers", getMembers);
module.exports = router;
