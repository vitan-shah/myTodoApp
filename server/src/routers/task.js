const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.post("/api/tasks", async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });

  try {
    await task.save();
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.get("/api/tasks", async (req, res) => {
  try{
    const tasks = await Task.find();
    res.send(tasks);
  } catch (e) {
    res.status(404).json();
  } 
});

router.patch("/api/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id,req.body,{
        new: true,
    })
    if(!task){
        return res.status(404).json({
            error: "Task not found",
        })
    }
    res.status(200).json(task)
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
