const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
  },
);
const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;
