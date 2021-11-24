const express = require("express");
const router = express.Router();
const {
  getAssignments,
  createAssignment,
} = require("../controllers/assignment");
router.get("/geAssignments", getAssignments);
router.post("/createAssignment", createAssignment);
module.exports = router;
