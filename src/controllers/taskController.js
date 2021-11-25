import mongoose from "mongoose";
import { TaskSchema } from "../models/taskModel";

const Task = mongoose.model("Task", TaskSchema);

export const addNewTask = (req, res) => {
  let newTask = new Task(req.body);
  newTask.save((err, Task) => {
    if (err) {
      res.send(err);
    }
    res.json(Task);
  });
};

export const getTask = (req, res) => {
  Task.find({}, (err, Task) => {
    if (err) {
      res.send(err);
    }
    res.json(Task);
  });
};

export const getTaskWhitID = (req, res) => {
  Task.findById(req.params.TaskID, (err, Task) => {
    if (err) {
      res.send(err);
    }
    res.json(Task);
  });
};

export const updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Task) => {
      if (err) {
        res.send(err);
      }
      res.json(Task);
    }
  );
};

export const deleteTask = (req, res) => {
  Task.remove({ _id: req.params.TaskID }, (err, Task) => {
    if (err) {
      res.send(err);
    }
    res.json({ mesage: "Successfully deleted Task" });
  });
};
