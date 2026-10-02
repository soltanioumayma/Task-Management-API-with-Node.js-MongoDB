import express from 'express';
import cors from 'cors';
import Task from './models/Task.js';

const app = express();

app.use(cors());
app.use(express.json());


// GET /tasks → get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET /tasks/:id → get one task
app.get('/tasks/:id', async (req, res) => {
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
});


// POST /tasks → create a task
app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// PUT /tasks/:id → update a task
app.put('/tasks/:id', async (req, res) => {
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
});


// DELETE /tasks/:id → delete a task
app.delete('/tasks/:id', async (req, res) => {
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
});


export default app;