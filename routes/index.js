const path = require('path');

const express = require('express');

const tasksController = require('../controllers/tasks');

const router = express.Router();

router.get('/', tasksController.index);

module.exports = router;
