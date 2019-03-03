const Task = require('../models/task');
const List = require('../models/list');

exports.getAddTask = (req, res, next) => {
  res.render('user/add-task', {
    pageTitle: 'Add Task',
    path: '/user/add-task'
  });
};

exports.postAddTask = (req, res, next) => {
  const task = new Task(req.body.title);
  task.save();
  res.redirect('/user/get-tasks');
};

exports.getAddList = (req, res, next) => {
  res.render('user/add-list', {
    pageTitle: 'Add List',
    path: '/user/add-list'
  });
};

exports.postAddList = (req, res, next) => {
  const list = new List(req.body.title);
  list.save();
  res.redirect('/user/get-lists');
};

exports.getLists = (req, res, next) => {
  List.fetchAll(lists => {
    res.render('user/get-lists', {
      lists: lists,
      pageTitle: 'All Lists',
      path: '/user/get-lists',
      hasLists: lists.length > 0
    });
  });
};

exports.getTasks = (req, res, next) => {
  Task.fetchAll(tasks => {
    res.render('user/get-tasks', {
      tasks: tasks,
      pageTitle: 'Tasks',
      path: '/user/get-tasks',
      hasTasks: tasks.length > 0
    });
  });
};

exports.index = (req, res, next) => {
  Task.fetchAll(tasks => {
    res.render('index', {
      tasks: tasks,
      pageTitle: 'Home',
      path: '/',
      hasTasks: tasks.length > 0
    });
  });
};
