const express = require('express');

const taskController = require('../controllers/tasks.js');

const router = express.Router();

router.get('/myDay', taskController.getMyDay);

router.get('/important', taskController.getImportant);

router.get('/planned', taskController.getPlanned);

router.get('/tasks', taskController.getTasks);

router.get('/add-task', taskController.getAddTask);

router.post('/add-task', taskController.postAddTask);

router.get('/', taskController.getHome);

module.exports = router;