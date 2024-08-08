const express = require('express');
const router = express.Router();
const todos = require('./todos');

router.get('/todos', (req, res) => {
    res.json(todos.getAll());
});

router.post('/todos', (req, res) => {
    const todo = req.body;
    todos.add(todo);
    res.status(201).json(todo);
});

router.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos.remove(id);
    res.status(204).send();
});

module.exports = router;
