const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const tasksList = [];

// tasks/add-task => GET
router.get('/add-task', (req, res, next) => {
    // console.log('in add-task middleware');
    res.render('add-task', {
        pageTitle: 'Add task',
        path: '/tasks/add-task'
    });
});

// tasks/add-task => POST
router.post('/add-task', (req, res, next) => {
    // console.log(req.body);
    tasksList.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.tasks = tasksList;