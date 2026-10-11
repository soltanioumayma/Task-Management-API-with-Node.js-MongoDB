
import Task from "../models/Task.js";

export async function getAllTasks(req, res) {
      try {
        const tasks = await Task.find();
    
        res.json(tasks);
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
}

export async function getTaskById(req, res) {
     try {
        const task = await Task.findById(req.params.id);
    
        if (!task) {
          return res.status(404).json({
            message: 'Task not found'
          });
        }
    
        res.json(task);
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
}

export async function createTask(req, res) {
    try {
        const task = await Task.create(req.body);
    
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({
          message: error.message
        });
      }
}

export async function updateTask(req, res) {
      try {
        const task = await Task.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
    
        if (!task) {
          return res.status(404).json({
            message: 'Task not found'
          });
        }
    
        res.json(task);
      } catch (error) {
        res.status(400).json({
          message: error.message
        });
      }
}

export async function deleteTask(req, res) {
 try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    res.json({
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}