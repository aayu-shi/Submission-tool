const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subSchema = new Schema({
  studentId: {
    type: String,
  },
  submittedFile: {
    type: String,
    required: true,
  },
  student: {
    type: String,
  },
  points: {
    type: String,
    default: "",
  },
});
let userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    classId: {
      type: String,
      required: true,
    },
    selectedFile: {
      type: String,
    },
    submissionCount: {
      type: Number,
      default: 0,
    },
    deadline: {
      type: Date,
      default: new Date(),
    },
    submissions: [subSchema],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    collection: "assignment",
  }
);
module.exports = mongoose.model("Assignment", userSchema);
