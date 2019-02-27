const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const taskData = require('./tasks')

const router = express.Router();

// / => GET
router.get('/', (req, res, next) => {
    // console.log('in last stand');
    const tasksList = taskData.tasksList;
    res.render('index', {
        tasks: tasksList,
        pageTitle: 'Home Page',
        path: '/',
        hasTasks: tasksList.length > 0
    });
});

module.exports = router;