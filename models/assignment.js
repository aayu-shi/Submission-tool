const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    tile: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    creator: {
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
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    collection: "class",
  }
);
module.exports = mongoose.model("Class", userSchema);
