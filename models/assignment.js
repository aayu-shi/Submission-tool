const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
    submissions: [String],
    submittedBy: [String],
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
