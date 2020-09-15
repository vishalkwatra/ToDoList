const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use(express.urlencoded({ extended: true }));
router.use('/tasks', require('./tasks'));

// const tasks_controller = require('../controllers/tasks_controller');
// router.post('/tasks/add', tasks_controller.addTask);

module.exports = router;