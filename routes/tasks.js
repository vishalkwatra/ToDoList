const express = require('express');
const tasksRouter = express.Router();

const tasks_controller = require('../controllers/tasks_controller');
console.log('Tasks route loaded');
// tasksRouter.post('/tasks/add', tasks_controller.addTask);
tasksRouter.post('/add', tasks_controller.addTask);
// router.get('/tasks-delete', tasks_controller.deleteTask);
tasksRouter.post('/delete', tasks_controller.deleteTask);

module.exports = tasksRouter;