const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: {
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
    members: [String],
  },
  {
    timestamps: true,
    collection: "class",
  }
);
module.exports = mongoose.model("Classroom", userSchema);
