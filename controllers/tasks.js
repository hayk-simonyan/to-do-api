const Tasks = require('../models/tasks');

exports.getMyDay = (req, res, next) => {
    res.render('user/myDay');
};

exports.getImportant = (req, res, next) => {
    res.render('user/important');
};

exports.getPlanned = (req, res, next) => {
    res.render('user/planned');
};

exports.getTasks = (req, res, next) => {
    res.render('user/tasks');
};

exports.getAddTask = (req, res, next) => {
    res.render('user/add-task');
};

exports.postAddTask = (req, res, next) => {
    const content = req.body.content;
    console.log(req.body.content)
    Tasks.create({
        content: content
    })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
};

exports.getHome = (req, res, next) => {
    res.render('index');
};