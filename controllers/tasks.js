const Task = require('../models/task');

exports.getAddTask = (req, res, next) => {
  res.render('add-task', {
    pageTitle: 'Add Task',
    path: '/user/add-task'
  });
};

exports.postAddTask = (req, res, next) => {
  const task = new Task(req.body.title);
  task.save();
  res.redirect('/');
};

exports.getTasks = (req, res, next) => {
  Task.fetchAll(tasks => {
    res.render('index', {
      tasks: tasks,
      pageTitle: 'Home',
      path: '/',
      hasTasks: tasks.length > 0
    });
  });
};
