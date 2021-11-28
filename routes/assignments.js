//routes for averything realted to assignments
const express = require("express");
const router = express.Router();
const {
  getAssignments,
  createAssignment,
  updateAssignment,
  gradeAssignment,
  getSubmission,
  deleteAssignment,
} = require("../controllers/assignment");
router.get("/geAssignments", getAssignments);
router.post("/createAssignment", createAssignment);
router.put("/updateAssignment", updateAssignment);
router.put("/gradeAssignment", gradeAssignment);
router.get("/getSubmission", getSubmission);
router.get("/deleteAssignment", deleteAssignment);
module.exports = router;
