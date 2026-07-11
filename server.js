/*
CM1040 REST API Assignment
Simple CRUD API built with Express.js
Author: Kassandra ter Beek
*/

const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const PORT = 3000;

// Temporary "database"
const tasks = [
    {
        id: 1,
        title: "Learn Express",
        completed: false
    },
    {
        id: 2,
        title: "Build REST API",
        completed: false
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("CM1040 REST API");
});

// GET all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// GET one task
app.get("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
});

// POST a new task
app.post("/tasks", (req, res) => {

    if (!req.body.title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT (update) a task
app.put("/tasks/:id", (req, res) => {

    const taskId = parseInt(req.params.id);

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    // Update only the fields that were provided
    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task Not Found"
        });
    }
    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({
        message: "Task deleted successfully!",
        deletedTask: deletedTask[0]
    });
});

// Start the server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
