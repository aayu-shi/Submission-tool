const Classroom = require("../models/class");

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