const express = require('express');
const router = express.Router();

const tasks_controller = require('../controllers/tasks_controller');

router.post('/tasks/add', tasks_controller.addTask);

router.get('/tasks/delete', tasks_controller.deleteTask);

module.exports = router;