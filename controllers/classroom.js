const Classroom = require("../models/class");

// to get available classes
exports.getclasses = async (req, res) => {
  try {
    const Classes = await Classroom.find();
    res.status(200).json(Classes);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
exports.createClass = (req, res) => {
  let { name, description, creator } = req.body;
  const newClass = new Classroom({
    name: name,
    description: description,
    creator: creator,
  });
  newClass
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

// to add member to classroom : called when a student enrolls in a classroom
exports.updateClass = async (req, res) => {
  const newMember = req.body.student;
  const id = req.body.id;

  try {
    await Classroom.findById(id, (err, updatedClass) => {
      updatedClass.members.push(newMember);
      updatedClass.save();
      res.status(200).json(updatedClass);
    });
  } catch (error) {
    res.status(409).json({ errors: error });
  }
};

// to get members of the classroom
exports.getMembers = async (req, res) => {
  const id = req.query.id;
  try {
    await Classroom.findById(id, (err, updatedClass) => {
      res.status(200).json(updatedClass.members);
    });
  } catch (error) {
    console.log(error);
  }
};
