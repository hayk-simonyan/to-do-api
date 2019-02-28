const path = require('path');

const express = require('express');

const tasksController = require('../controllers/tasks');

const router = express.Router();

// /admin/add-task => GET
router.get('/add-task', tasksController.getAddTask);

// /admin/add-task => POST
router.post('/add-task', tasksController.postAddTask);

module.exports = router;
