const express = require('express');
const router = express.Router();
const Task = require('./task');

// Create a new task
router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Read all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
