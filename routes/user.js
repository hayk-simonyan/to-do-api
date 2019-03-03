const path = require('path');

const express = require('express');

const tasksController = require('../controllers/tasks');

const router = express.Router();

// /user/add-task => GET
router.get('/add-task', tasksController.getAddTask);

// /user/add-task => POST
router.post('/add-task', tasksController.postAddTask);

// /user/get-tasks => GET
router.get('/get-tasks', tasksController.getTasks);

// /user/add-list => GET
router.get('/add-list', tasksController.getAddList);

// /user/add-list => POST
router.post('/add-list', tasksController.postAddList);

// /user/get-lists => GET
router.get('/get-lists', tasksController.getLists);

module.exports = router;