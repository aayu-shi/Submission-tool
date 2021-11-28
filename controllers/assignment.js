const Assignment = require("../models/Assignment");

//for fetching available assignment
exports.getAssignments = async (req, res) => {
  try {
    const Assignments = await Assignment.find();
    res.status(200).json(Assignments);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// for creating a new assignment
exports.createAssignment = (req, res) => {
  let { title, description, classId, deadline, selectedFile } = req.body;
  const newAssignment = new Assignment({
    description: description,
    title: title,
    classId: classId,
    deadline: deadline,
    selectedFile: selectedFile,
  });
  newAssignment
    .save()
    .then((response) => {
      res.status(201).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(409).json({ errors: err });
    });
};

// for adding submission for assignment
exports.updateAssignment = async (req, res) => {
  const id = req.body.id;
  const submission = {
    studentId: req.body.studentId,
    submittedFile: req.body.submittedFile,
    student: req.body.student,
    points: "",
  };
  const query = Assignment.findById(id, (err, updatedAssignment) => {
    updatedAssignment.submissions.push(submission);
    updatedAssignment.submissionCount = updatedAssignment.submissionCount + 1;
    updatedAssignment.save();
    res.status(200).json(updatedAssignment);
  });

  try {
    await query.clone();
  } catch (error) {
    res.status(409).json({ errors: error });
  }
};

// for grading a assignment
exports.gradeAssignment = async (req, res) => {
  const id = req.body.id;
  const submission = {
    studentId: req.body.studentId,
    submittedFile: req.body.submittedFile,
    student: req.body.student,
    points: req.body.points,
  };

  const query = Assignment.findById(id, (err, updatedAssignment) => {
    let assignments = [];
    updatedAssignment.submissions.forEach((element) => {
      if (element.studentId === submission.studentId) {
        assignments.push(submission);
      } else {
        assignments.push(element);
      }
    });
    updatedAssignment.submissions = [...assignments];
    updatedAssignment.save();
    res.status(200).json(updatedAssignment);
  });

  try {
    await query.clone();
  } catch (error) {
    res.status(409).json({ errors: error });
  }
};

//to get submitted assignment
exports.getSubmission = async (req, res) => {
  const id = req.query.id;
  const studentId = req.query.studentId;
  let result = "";
  const query = Assignment.findById(id, (err, getAssignment) => {
    getAssignment.submissions.forEach((element) => {
      if (element.studentId === studentId) {
        result = {
          submittedFile: element.submittedFile,
          points: element.points,
        };
      }
    });
    res.status(200).json(result);
  });
  try {
    await query.clone();
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

//to delete a assignment
exports.deleteAssignment = async (req, res) => {
  const id = req.query.id;
  const query = Assignment.findByIdAndDelete(id, (err, element) => {
    if (err) {
      res.status(404).json({ message: error });
    } else {
      res.status(200).json("deleted successfully");
    }
  });
  try {
    await query.clone();
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
