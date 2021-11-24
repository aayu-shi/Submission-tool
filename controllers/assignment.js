const Assignment = require("../models/Assignment");

exports.getAssignments = async (req, res) => {
  try {
    const Assignments = await Assignment.find();
    res.status(200).json(Assignments);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
exports.createAssignment = (req, res) => {
  let { title, description, classId, deadline, selectedFile } = req.body;
  const newAssignment = new Assignment({
    description: description,
    title: title,
    classId: classId,
    deadline: deadline,
    selectedFile: selectedFile,
  });
  console.log(newAssignment);
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
